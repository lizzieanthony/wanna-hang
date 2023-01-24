import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const SignupForm = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [question, setQuestion] = useState("")
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate= useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const user = {email: email,
            first_name: firstName,
            last_name: lastName,
            bio: bio,
            question: question,
            image: imageUrl,
            password: password}
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate("/setup");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
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
         <label>First Name:</label>
         <input
           type="text"
           required
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
         />
         <label>Last Name:</label>
         <input
           type="text"
           required
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
         />
         <label>Tell us about yourself:</label>
         <input
           type="text"
           required
           value={bio}
           onChange={(e) => setBio(e.target.value)}
         />
         <label>Why do you want to joing Wanna Hang?:</label>
         <input
           type="text"
           required
           value={question}
           onChange={(e) => setQuestion(e.target.value)}
         />
         <label>Image url:</label>
         <input
           type="text"
           required
           value={imageUrl}
           onChange={(e) => setImageUrl(e.target.value)}
         />
         <label>Password:</label>
         <input
           type="password"
           required
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        <button className='newButton' type="submit">Create Account</button>
        </form>
      </div>
     );
}
 
export default SignupForm;

// <div className='newButton'>
//           <input type="submit" value="Submit" />
//           </div>