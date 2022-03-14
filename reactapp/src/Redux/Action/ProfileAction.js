//submit//
export const addTodo = (data) => {
  return {
    type: "Add_Data",
    payload: data,
 
  };
};
//delete//
export const deleteTodo = (index) => {
  return {
    type: "Delete_Data",
    payload: index,
  };
};
//edit//
export const editTodo = (index) => {
  return {
    type: "Edit_Data",
    payload: index,
  };
};
//update//
export const updateTodo=(id)=>{
  return{
    type:"Update_Data",
    payload:id
  };
};
