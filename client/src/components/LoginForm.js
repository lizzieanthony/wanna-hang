import React, { useState } from "react";
// import {useNavigate} from "react-router-dom";


const LoginForm = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    // const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault()
        const user = {email: email, password: password}
        fetch("/login", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                // navigate("/")
              } else {
                r.json().then((err) => setErrors(err.errors));
              }
        })
    }

    return ( 
        <div className="login-form">
        <form onSubmit={handleSubmit}>
        <label>Email:</label>
         <input
           type="text"
           required
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
        <label>Password:</label>
         <input
           type="text"
           required
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         <button>Login</button>
         {errors.map((err) => (
        <p key={err}>{err}</p>
        ))}
       </form>
        </div>
     );
}
 
export default LoginForm;

