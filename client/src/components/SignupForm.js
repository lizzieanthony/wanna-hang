import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const SignupForm = ({ allUsers, setAllUsers}) => {
    const { setUser} = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [question, setQuestion] = useState("")
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate= useNavigate();
//   class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             defaultImage:
// 'https://media.geeksforgeeks.org/wp-content/uploads/20220608214420/galaryImage5-300x300.png',
//         };
//     }
  
//     // replace image function
//     replaceImage = (error) => {
//         //replacement of broken Image
//         error.target.src = this.state.defaultImage; 
//     }
  



  const newUser = (addedUser) => {
    const updatedUsers = [...allUsers, addedUser]
    setUser(addedUser)
    setAllUsers(updatedUsers)
  }

    function handleSubmit(e) {
        e.preventDefault();
        const userInfo = {email: email,
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
          body: JSON.stringify(userInfo)
        })
        .then((r) => {
          if (r.ok) {
            r.json().then(newUser)
            navigate("/setup");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });      
    }
    // const addDefaultSrc = (ev) => {
    //   ev.target.src = 'https://www.w3schools.com/howto/img_avatar.png'
    // }
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
           onChange={(e) => setFirstName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
         />
         <label>Last Name:</label>
         <input
           type="text"
           required
           value={lastName}
           onChange={(e) => setLastName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
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
         {errors?.map((err) => (
            <p key={err}>Error: {err}</p>
          ))}
        <button className='newButton' type="submit">Let's Hang</button>
        </form>
      </div>
     );
}
 
export default SignupForm;

//            onError={this.addDefaultSrc}
