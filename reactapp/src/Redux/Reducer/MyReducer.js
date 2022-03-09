const initialState = {
    User:[],
    loading:true
} 
export const Myreducer=function(state=initialState,action){
    

    switch(action.type){
        
        case 'Get_User':
           
        return {
           
                  ...state,
                
                User:action.payload,
                loading:false

        }
        default: return state
    }
}
export default Myreducer;