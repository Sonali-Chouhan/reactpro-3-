const initialState = {
  data: [],
  
};
export const ProfileReducer = function (state = initialState, action) {
  console.log("action",action)
  switch (action.type) {
    case "Add_Data":
    
      let item=action.payload
      console.log("action",action.payload)
        if(action.id)
        {
          
          item.splice(action.id,1,{
            name:action.payload.name,
            email:action.payload.email
          })
        }
      else{
        return {
          ...state,
          data: [...state.data, action.payload],
        
        };
      }
     
    
    case "Delete_Data":
      let list = state.data;
      list.splice(action.payload, 1);
      return { ...state, data: [...list] };
    
    case "Edit_Data":
      let items = state.data;
      let current_object = items[action.payload];
      console.log("current object",current_object)
      return{
        ...state,
        isEdit:current_object
      }
    
    default:
      return state;
  }
};
export default ProfileReducer;
