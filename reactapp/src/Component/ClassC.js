import React from "react";
import { getUser } from "../Redux/Action/myaction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Data: [],
    };
  }
  componentDidMount() {
    this.props.getUser();
  }
   static getDerivedStateFromProps(props, state) {
      return {
        Data: props.User ,
       };

    }
  handleChangeValue = (e) => {
    var search = e.target.value;
    var Data = this.props.User.filter((e) => {
      return e.title.includes(search);
    });
    this.setState({
      Data: Data,
      search: search,
    });
  };
  render() {
    console.log(222222, this.state.Data)
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            value={this.state.search}
            onChange={(e) => this.handleChangeValue(e)}
            placeholder="Search Box"
          />
        </form>
        <h1>Table</h1>
        <table border="1">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Data.map((e, id) => {
              return (
                <tr key={id}>
                  <td> {e.userId}</td>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    User: state.User,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
