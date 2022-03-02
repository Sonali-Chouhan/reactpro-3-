import React, { Component } from 'react'
export class Child extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
   
   handleSubmit=(event)=>{
       this.props.ParentColl(event.target.User.value);
       event.preventDefault();
   }
  render() {
    return (
           <div  className='Child'>
            <form onSubmit={this.handleSubmit}>
            <input type="text" 
                   name="User"
                   placeholder="Input Box"
            />
            <input type="submit" value="Submit" />
            </form>
         </div>
    )
  }
}
export default Child;
