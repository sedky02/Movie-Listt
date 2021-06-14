import React from "react";
import { useDispatch } from "react-redux";
import Input from "../component/input/input";
import { loggin , activate} from "../component/actions";
import {Link} from "react-router-dom";
function Login (){
    const dispatch = useDispatch();
    return(
        <div className="content login-container">
            <div className="login">
                <h1>Login</h1>
            <div className="input-form">
                <Input text="email" type="email" place="email@gmail.com"/>
                <Input text="password" type="password" place="••••••••" show="show" type2="text" p="password not correct"/>
            </div>
            <div className="buttons">
            <Link style={{textDecoration : "none"}} to="/" >
            <button className="return" onClick={()=> dispatch(activate("home"))} >return</button>
            </Link>
            <Link style={{textDecoration : "none"}} to="/" >
            <button className="sign-in" onClick={()=>{ dispatch(loggin()) ; dispatch(activate("home"))}} >sign in</button>
            </Link>
            </div>
            </div>
        </div>
    );
}
export default Login;