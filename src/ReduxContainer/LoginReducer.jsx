import { login } from "./LoginActionTypes";
import { logout } from "./LoginActionTypes";
const initialState={
    loggedIn:'False'
}
const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case login:return{
            ...state,loggedIn:'True'
        }
        case logout:return{
            ...state,loggedIn:'False'
        }
        default:return state
    }
}

export default LoginReducer;