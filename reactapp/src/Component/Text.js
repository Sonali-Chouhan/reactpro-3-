import React, { Component } from "react";

const Name = [
  { id: 1, text: "xyz" },
  { id: 2, text: "abc"},
  { id: 3, text: "yuva"},
];

export class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Name,
      search: "",
    };
  }
  handleValue = (e) => {
    var search = e.target.value;
    var Data = Name.filter((el) => {
      return el.text.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({
      search: search,
      Data: Data,
    });
  };

  render() {
    return (
      <div>
        <input
          type="test"
          name="search"
          value={this.state.search}
          onChange={(e) => this.handleValue(e)}
          placeholder="Search Box"
        />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Text</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.Data.map((item,id) => {
              return (
                <tr key={id}>
                  <td>{item.id}</td>
                  <td>{item.text}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Text;
{/* <tbody>
{this.state.Data.map((item, id) => {
  return (
    <tr key={id}>
      <td> {item.userId}</td>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
    </tr>
  );
})} */}
{/* {this.state.Data.filter((item) => {
  if (query === "") {
    return item;
  } else if (
    item.title?.toLowerCase().includes(query.toLowerCase())
  ) {
    return item;
  }
}).map((item, id) => {
  return (
    <tr key={id}>
      <td> {item.userId}</td>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
    </tr>
  );
})} */}
