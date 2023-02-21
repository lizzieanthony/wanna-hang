import React, {useRef, useState, useContext} from 'react';
// import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

const UserProfile = ({allUsers, setAllUsers, activities}) => {
  const {user, setUser} = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const ref = useRef(null);
  const navigate= useNavigate()
  const goBack = () => {
      navigate(-1);
  }
  
// profile form 
  const editProfile = (updatedProfile) => {
    const updateAllUsers = allUsers.map((user) => {
        if (user.id === updatedProfile.id) {
            return updatedProfile 
        } else {
            return user  
        } 
    });
    // const updatedActivities= {...user, activities: updateAllUsers}
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

// activity checkbox 

// const [checkedState, setCheckedState] = useState(
//     new Array(activities.length).fill(false)
// );

// const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );
//     setCheckedState(updatedCheckedState);
// }

// const orderedActivities = [].concat(activities)
// .sort((a, b) => a.name > b.name ? 1 : -1)

// delete user

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
        <h4>{user.activities.map((activity) => (<ul>{activity.name}</ul>))}</h4>
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


// ~~~ to display user info and update it inline 

// <label>First Name:</label>
// <input
//   type="text"
//   defaultValue={user.first_name}
//   onChange={(e) => setUser({...user, first_name: e.target.value})}
// />

// const updateProfile = {
    //     first_name: firstName,
    //     last_name: lastName,
    //     bio: bio,
    //     question: question,
    //     image: imageUrl}

    //   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     bio: "",
//     question: "",
//     image: "",
//   })
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [bio, setBio] = useState("");
//   const [question, setQuestion] = useState("")
//   const [imageUrl, setImageUrl] = useState("");

// <h3>Update your activities:</h3>
//         <ul >
//         {orderedActivities.map((activity, index) => {
//             return (
//                 <ul key={index}>
//                 <input 
//                 type="checkbox"
//                 id={`custom-checkbox-${index}`}
//                 name={activity.name}
//                 value={activity.name}
//                 // defaultValue={user.activities}
//                 checked={checkedState[index]}
//                 onChange={() => handleOnChange(index)}
//                 />
//                 <label htmlFor={`custom-checkbox-${index}`}>  {activity.name}</label>
//                 </ul>
//             )
//         }
//         )}
//         </ul>