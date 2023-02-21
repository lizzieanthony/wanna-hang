import React, { useState, useContext } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { UserContext } from "../context/user";

const Login = ({allUsers, setAllUsers}) => {
    const [showLogin, setShowLogin] = useState(true);
    const { setUser} = useContext(UserContext);

    return (
        <div className="login-page">
        <div className="nav">
             <h1 className="title">Wanna Hang?</h1>
            </div>
        <div className="login-box">
        <h2>Wanna Hang was made to help facilitate hangs for people with common insterests.</h2>
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
          <SignupForm setAllUsers={setAllUsers} allUsers={allUsers} />
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