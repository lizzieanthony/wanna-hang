import React, {useRef, useState, useContext} from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

const UserProfile = ({allUsers, setAllUsers}) => {
  const {user, setUser} = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const ref = useRef(null);
  const navigate= useNavigate()
  const goBack = () => {
      navigate(-1);
  }
  
  const editProfile = (updatedProfile) => {
    const updateAllUsers = allUsers.map((user) => {
        if (user.id === updatedProfile.id) {
            return updatedProfile 
        } else {
            return user  
        } 
    });
    setUser(updatedProfile)
    setAllUsers(updateAllUsers)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((r) => {
        if (r.ok) {
          r.json().then(editProfile);
          navigate("/")
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
}

const onDeleteUser = (userToDelete) => {
    const updatedAllUsers = allUsers.filter(user=> user.id !== userToDelete.id)
    setUser(null) 
    setAllUsers(updatedAllUsers)
}

const handleDelete = () => {
    fetch(`/users/${user.id}`, {
        method: "DELETE"
    })
    .then(r => {
        if (r.ok) {
            onDeleteUser(user)
        }
        navigate("/")
    })
}

    return ( 
        <div>
        <div className="main">
        <button onClick={goBack}>back</button>
    <div className="user-preview" key={user.id}>
      <div>
        <img src={user.image}alt="userImage"/>
        <h4> A little more about {user.first_name}: <br /> {user.bio} <br /> <br /> {user.first_name} wants to hang becasue: <br />{user.question}</h4>
        <h1>{user.first_name} {user.last_name}</h1>
        <h4>Your Activities: {user.activities.map((activity) => (<p>{activity.name}</p>))}</h4>
      </div> 
    </div>
    </div>
        <div className="login-form">
        <form className="edit-user" onSubmit={handleUpdate}>
         <label>First Name:</label>
         <input
           type="text"
           required
           ref ={ref}
           defaultValue={user.first_name}
           onChange={(e) => setUser({...user, first_name: e.target.value})}
         />
         <label>Last Name:</label>
         <input
           type="text"
           required
           defaultValue={user.last_name}
           onChange={(e) => setUser({...user, last_name: e.target.value})} 
         />
         <label>Tell us about yourself:</label>
         <input
           type="text"
           required
           defaultValue={user.bio}
           onChange={(e) => setUser({...user, bio: e.target.value})} 
         />
         <label>Why do you want to join Wanna Hang?</label>
         <input
           type="text"
           required
           defaultValue={user.question}
           onChange={(e) => setUser({...user, question: e.target.value})} 
         />
         <label>Image url:</label>
         <input
           type="text"
           required
           defaultValue={user.image}
           onChange={(e) => setUser({...user, image: e.target.value})} 
         />
         {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
          
        <button className='newButton' type="submit">Return Home</button>
        </form>
        <button className='newButton' onClick={handleDelete}>Deactivate Account</button>
      </div>
      </div>
     );
}
 
export default UserProfile;
