export const addTodo=(data)=>{
    return{
        type:"Add_Data",
        payload:data

        
    }

};
export const deleteTodo=(id)=>{
    return{
        type:"Delete_Data",
        payload:id
    }
}
export const editTodo=(id)=>{
    return {
        type:"Edit_Data",
        payload:id
    }
}


