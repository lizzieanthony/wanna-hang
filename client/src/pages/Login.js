import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Login = ({setUser}) => {

    return ( 
        <div>
        <h1>Wanna Hang?</h1>
        <div className="login-box">
        <h2>Step out of your comfort zone! we make the first move for you</h2>
        <LoginForm setUser={setUser}  />
        <SignupForm setUser={setUser}  />
        </div>
        </div>
        
     );
}
 
export default Login;