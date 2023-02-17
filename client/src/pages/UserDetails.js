import {useNavigate, useParams} from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

const UserDetails = ({ activities, allUsers}) => {
    const {user} = useContext(UserContext);
    const {id} = useParams();
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    const singleUser = allUsers.find(obj => obj.id == id)

    return ( 
        <div className="main">
            <button onClick={goBack}>back</button>
        <div className="user-preview" key={user.id}>
          <div className="card-1">
            <img src={singleUser.image}alt="userImage"/>
            <h3>{singleUser.bio}</h3>
            <h4>{singleUser.question}</h4>
            <h1>{singleUser.first_name} {singleUser.last_name}</h1>
            <h4>{singleUser.activities.map((activity) => (<ul>{activity.name}</ul>))}</h4>
            <button>Connect with {singleUser.first_name}</button>
          </div> 
        </div>
        </div>
        );
}
 
export default UserDetails;


    // useEffect(() => {
    //     const singleUser = allUsers.find(obj => obj.id == id)
    //     setSelectedUser(selectedUser)
    // }, [allUsers])
