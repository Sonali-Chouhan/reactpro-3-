
const initialState = {
  data:[],

};
export const ProfileReducer = function (state = initialState, action) {
  switch (action.type) {
    case "Add_Data":
      
      return {
        ...state,
        data:[...state.data, action.payload]
    
      };
    case "Delete_Data":
      let list = state.data
      list.splice(action.payload, 1)
      return {...state,data: [...list]
      };
    case "Edit_Data":
      let items=state.data
      let obj=items[action.payload]

    return{...state}

    default:
      return state;
  }
};
export default ProfileReducer;
