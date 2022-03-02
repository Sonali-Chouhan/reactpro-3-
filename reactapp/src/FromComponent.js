import React from "react";

export default class Frompage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount(){
    fetch(
      "https://jsonplaceholder.typicode.com/posts")
                  .then((res) => res.json())
                  .then((json) => {
                      this.setState({
                          data: json,
                          
                      });
                  })
  }
render() {
    return (
      <div className="Frompage">
        <h1>Fetch Api</h1>
        
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
              {
                this.state.data.map((item)=>{
                  return(
                    <tr>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  )
                })
                
              }     
            </tbody>
           
        </table>
      </div>
    );
  }
}
// var Data= this.state.Data;
   
    // var searchString = this.state.search.trim().toLowerCase();
    
    // if (searchString.length > 0) {
    //   Data = Data.filter((e) => e.title?.toLowerCase().match(searchString));
    // }
 // handleSearch = () => {
  //   var Data=this.state.Data
  //   var search=this.state.search
  //   let item= Data.filter(value => {
  //   return (
  //       value.firstName?.toLowerCase().includes(search.toLowerCase()) ||
  //        value.visits
  //         .toString()
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     );
  //   });
  //   this.setState({ Data:item });
  // };