const initialState = {
  data: [],
};
export const ProfileReducer = function (state = initialState, action) {
  switch (action.type) {
    //Add User

    case "Add_Data":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    //Delete User

    case "Delete_Data":
      let list = state.data;
      list.splice(action.payload, 1);
      return { ...state, data: [...list] };

    //Edit User
    case "Edit_Data":
      let items = state.data;
      let current_object = items[action.payload];

      return {
        ...state,
        isEdit: current_object,
      };

    //Update_User
    case "Update_Data":
      for (let i in state.data) {
        debugger
        if (state.data[i].id === action.payload.id) {
          state.data[i].name = action.payload.name;
          state.data[i].email = action.payload.email;
        }
      }
   
      //   state.data.forEach((item)=>{
      //     if(item.id===action.payload.id){
      //       item.name = action.payload.name
      //       item.email = action.payload.email
      //     }
      // })
      return {
        ...state,
        isEdit: false,
      };

    default:
      return state;
  }
};
export default ProfileReducer;
