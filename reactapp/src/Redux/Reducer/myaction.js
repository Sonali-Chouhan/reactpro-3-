import axios from "axios"
export const Get_User = 'Get_User';
 export const getUser=()=>{
   
    return (dispatch) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                return response.data
            })
            .then( Data => {
                dispatch({
                    type:Get_User,
                    payload:Data
                })
               
            })
            .catch(error => {
                throw (error);
            });
    };
}


export default getUser;