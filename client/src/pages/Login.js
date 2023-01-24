import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Login = ({setUser}) => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="login-page">
        <div className="nav">
             <h1 className="title">Wanna Hang?</h1>
            </div>
        <div className="login-box">
        <h2>Step out of your comfort zone! we make the first move for you</h2>
        {showLogin ? (
            <div>
            <LoginForm setUser={setUser}  />
            <br />
            <div>
            <p>Fist time hanging? </p>
           
            <br />
            <button onClick={() => setShowLogin(false)}>Join Here</button>
            </div>
            </div>
        ) : (
          <div>
          <SignupForm setUser={setUser} />
          <br />
          <p>Already have an account?
          <br />
          <br />
          <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
          </div>  
        )}
        </div>    
        </div>
         
     );
}
 
export default Login;

//