import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";


const UserProfile = ({setUser, user}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [question, setQuestion] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const ref = useRef(null);
  
  const editProfile = (updatedProfile) => {
    if (user.id === updatedProfile.id) {
        return updatedProfile 
    } else {
        return user
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updateProfile = {
        first_name: firstName,
        last_name: lastName,
        bio: bio,
        question: question,
        image: imageUrl}
    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateProfile)
    })
    .then((r) => {
        if (r.ok) {
          r.json().then(setUser({...user, editProfile}));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
}

    return ( 
        <div className="login-form">
        <form onSubmit={handleUpdate}>
         <label>First Name:</label>
         <input
           type="text"
           required
           ref ={ref}
           defaultValue={firstName}
           onChange={(e) => setFirstName(e.target.value)}
         />
         <label>Last Name:</label>
         <input
           type="text"
           required
           defaultValue={lastName}
           onChange={(e) => setLastName(e.target.value)}
         />
         <label>Tell us about yourself:</label>
         <input
           type="text"
           required
           value={bio}
           onChange={(e) => setBio(e.target.value)}
         />
         <label>Why do you want to join Wanna Hang?</label>
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
         {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        <button className='newButton' type="submit">Save Changes</button>
        <Link to="/setup" >
            <button>Edit Activities</button>
        </Link>
        </form>
    
      </div>
     );
}
 
export default UserProfile;

// <label>Activities:</label>
//          <input
//            type="text"
//            required
//            value={imageUrl}
//            onChange={(e) => setImageUrl(e.target.value)}
//          />