import React from "react";
import { getUser } from "./myaction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      search: "",
      Data: [],
    };
    // console.log("666",this.state.Data)
  }
  componentDidMount() {
    this.props.getUser();
    var item=this.props.User;
    this.setState({
      Data:item
    })
    console.log("9999",item);


  }
  handleChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSearch = () => {
    // var Data=this.state.Data
    // var search=this.state.search
    // let item= Data.filter(value => {
    // return (
    //     value.firstName?.toLowerCase().includes(search.toLowerCase()) ||
    //      value.visits
    //       .toString()
    //       .toLowerCase()
    //       .includes(search.toLowerCase())
    //   );
    // });
    // this.setState({ Data:item });
  };
  render() {
        console.log("888",this.props.User)
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChangeValue}
            placeholder="Search Box"
          />
          <input type="submit" value="Submit" />
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
            {this.props.User.map((item, id) => {
              return (
                <tr key={id}>
                  <td> {item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
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
