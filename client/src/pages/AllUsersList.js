import {Link, useParams, useNavigate} from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

const AllUsersList = ({ activities, allUsers}) => {
    const {user} = useContext(UserContext);
    const {id} = useParams();
    const [selectedActivity, setSelectedActivity] = useState("default")
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
   
    console.log("all users list")

    const otherUsers = allUsers?.filter(users => users.id !== user.id)

    const orderedUsers = [].concat(otherUsers)
        .sort((a, b) => a.first_name > b.first_name ? 1 : -1)

    let filteredUsers 
    if(selectedActivity === "default") {
       filteredUsers = orderedUsers
    } else {  
        filteredUsers = orderedUsers.filter((user) => user.activities.find((activity) => activity.id === parseInt(selectedActivity)))
        } 

    console.log(allUsers)

    return ( 
        <div className="main">
        <button onClick={goBack}>back</button>
            <div className="dropdown">
                <select value={selectedActivity} onChange={e => setSelectedActivity(e.target.value)}>
                    <option value="default">
                        All Users
                    </option>
                    {activities.map(activity => {
                        return <option key={activity.id} value={activity.id} name={activity.name}>{activity.name}</option>
                        })}
                </select>
            </div>
        <br/>
        <br/>
        {filteredUsers.map((user) => (
            <div className="user-preview" key={user.id}>
            <div className="card-1">
            <Link to={`/all/${user.id}`}>
                <img key={user.image} src={user.image}alt="userImage"/>
                <h3 key={user.bio}>{user.bio}</h3>
                <h1 key={user.first_name}>{user.first_name}</h1>
            </Link>
            </div>
            </div>
        ))}
        </div>
     );
}
 
export default AllUsersList;



 