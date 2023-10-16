import { login } from "./LoginActionTypes";
import { logout } from "./LoginActionTypes";

const LoginAction=()=>{
    return{
        type:login
    }
}

const LogoutAction=()=>{
    return{
        type:logout
    }
}

export {LoginAction,LogoutAction};
