import React, { useState } from "react";
import { addTodo, deleteTodo, editTodo } from "../Redux/Action/ProfileAction";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
  });
  const data = useSelector((state) => state.ProfileReducer.data);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(user));
    setuser({
      ...user,
      name: "",
      email: "",
    });
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };
  return (
    <div>
      <h1>Function Component And Redux</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserName">First Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setuser({ ...user, name: e.target.value })}
            placeholder="Enter User Name"
          />
        </div>
        <div>
          <label htmlFor="UserName"> Email Id</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            placeholder="Enter Email Id"
          />
        </div>
        <input type="submit" value="submit" />
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
