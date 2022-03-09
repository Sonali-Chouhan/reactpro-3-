// import React, { useReducer, useState } from "react";
// const reducer = function (state, action) {
//   switch (action.type) {
//     case "submit":
//       return {
//         ...state,

//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// const ListComponent = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [data, setdata] = useState([]);
//   const addTodo = (event) => {
//     event.preventDefault();
//     data.push({
//       name: name,
//       email: email,
//     });
//     setdata(data);
//     setname({
//       ...name,
//       name: "",
//     });
//     setemail({
//       ...email,
//       email: "",
//     });
//   };
//   return (
//     <div>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           placeholder="enter name"
//           name="name"
//           value={name}
//           onChange={(e) => setname({ name: e.target.value })}
//         />

//         <input
//           type="text"
//           placeholder="enter name"
//           name="name"
//           value={email}
//           onChange={(e) => setemail({ email: e.target.value })}
//         />
//         <button>add</button>
//       </form>
//     </div>
//   );
// };

// export default ListComponent;
