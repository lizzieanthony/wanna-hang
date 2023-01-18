import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";

const Login = ({setUser}) => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
        <div className="nav">
            <h1 className="title">Wanna Hang?</h1>
            </div>
        <div className="login-box">
        <h2>Step out of your comfort zone! we make the first move for you</h2>
        {showLogin ? (
            <div>
            <LoginForm setUser={setUser}  />
            <br />
            <p>
            Fist time hanging? 
            <button onClick={() => setShowLogin(false)}>Join</button>
            </p>
            </div>
        ) : (
          <div>
          <SignupForm setUser={setUser} />
          <br />
          <p>Already have an account?
          <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
          </div>  
        )}
        </div>    
        </div>
         
     );
}
 
export default Login;