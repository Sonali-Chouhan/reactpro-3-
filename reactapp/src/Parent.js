import React, { Component } from 'react';
import Child from "./Child";
export class Parent extends Component {
    state={
        user:''
    }
    Childreceive=(Child)=>{
        this.setState({
            user:Child
        })

    }

  render() {
      const {user}=this.state;
    return (
      <div>
        <h1>Parent </h1>
        <p>{user}</p>
        <Child ParentColl={this.Childreceive}/>
       
    
      </div>
    )
  }
}
export default Parent;
