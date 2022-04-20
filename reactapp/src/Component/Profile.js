import React, { useEffect, useState } from "react";
import {
  addTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from "../Redux/Action/ProfileAction";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
  });
  const [id, setId] = useState(1);

  const data = useSelector((state) => state.ProfileReducer.data);
  const test = useSelector((state) => state.ProfileReducer);
  const record = test.isEdit;

  //despach method
  const dispatch = useDispatch();

  //Submit code here
  const handleSubmit = (event) => {
    event.preventDefault();
    if (record) {
      dispatch(updateTodo(user));
    } else {
      user["id"] = id;

      dispatch(addTodo(user));
    }
    setId(id + 1);
    setuser({
      ...user,
      name: "",
      email: "",
    });
  };

  //delete record
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  //edit user
  const handleEdit = (index) => {
    dispatch(editTodo(index));
  };
  useEffect(() => {
    var item = record;
    console.log(12211212, item);
    if (item) {
      setuser({
        ...user,
        name: item.name,
        email: item.email,
      });
    }
  }, [record]);
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
            <th>Index</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
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
