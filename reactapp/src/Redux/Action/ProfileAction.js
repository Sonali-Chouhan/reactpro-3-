export const addTodo = (data,id) => {
  return {
    type: "Add_Data",
    payload: data,
    id:id
  };
};
export const deleteTodo = (index) => {
  return {
    type: "Delete_Data",
    payload: index,
  };
};
export const editTodo = (index) => {
  return {
    type: "Edit_Data",
    payload: index,
  };
};
