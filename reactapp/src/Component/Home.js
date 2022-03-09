import React, { Component } from "react";
import axios from 'axios';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      const Data = res.data;
      this.setState ({Data});
      // console.log("23",Data);
    })
  
  }
  render() {
    return (
      <div className="MyComponent">
        <h1>Axios Api</h1>
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
            {this.state.Data.map((item, id) => {
              return(
              <tr key={id}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>);
            })}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default MyComponent;
