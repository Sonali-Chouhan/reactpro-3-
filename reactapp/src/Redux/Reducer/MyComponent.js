import React from "react";
import { getUser } from "./myaction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.getUser()
  }

  render() {
    console.log("test", this.props.User);

    return (
      <div>
        {/* <button onClick={()=>this.handleClick()}>click</button> */}
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
    // handleClick: () => dispatch({ type: 'Get_User' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);
