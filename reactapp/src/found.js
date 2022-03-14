// const initialState = {
//     data: [],
//     id: 0,
//   };
//   export const ProfileReducer = function (state = initialState, action) {
  
//     switch (action.type) {
      
//       case "Add_Data":
//         console.log("id",state.id)
//         return {
          
//           ...state,
//           data: [...state.data, {name:action.payload.name,email:action.payload.email,id:state.id + 1}],
//           id: state.id + 1,
//         };
      
//       case "Delete_Data":
//         let list = state.data;
//         list.splice(action.payload, 1);
//         return { ...state, data: [...list] };
//       case "Edit_Data":
//         let items = state.data;
//         let current_object =items[action.payload];
       
//         return{
//           ...state,
//           isEdit:current_object
//         }
//       default:
//         return state;
//     }
//   };
//   export default ProfileReducer;
//   if(state.id)
//         {
//           console.log("id",state.id)
//           console.log("data",state.data)
//         return{
//           ...state,
//             data:state.data.splice(state.id,1,{
//             name:action.payload.name,
//             email:action.payload.email
//           })
//         }
//       }
//       else{
//     if(id){
//         obj.splice(id,1,{
//          name:action.payload.name,
//          email:action.payload.email
//         })
//       }
//       return {
//         ...state,
//         data:[...obj]
//       }
// //   state.data.forEach((item)=>{
      //     if(item.id===action.payload.id){
      //       item.name = action.payload.name
      //       item.email = action.payload.email
      //     }
      // })