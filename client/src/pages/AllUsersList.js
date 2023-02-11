import {Link} from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

const AllUsersList = ({allUsers, activities}) => {
    const {user} = useContext(UserContext);
    const [filteredUsers, setFilteredUsers] = useState(allUsers)
    const [selectedActivity, setSelectedActivity] = useState(null)

    const otherUsers = allUsers.filter(users => users.id !== user.id)

    const orderedUsers = [].concat(otherUsers)
        .sort((a, b) => a.first_name > b.first_name ? 1 : -1)

    const filterByActivity = activity => {
        debugger
        setFilteredUsers(
            allUsers.filter(user => {
                return user.activities.name === activity.name         
            })
        )
    }

    return ( 
        <div className="main">
        <select onChange={e => filterByActivity(e.target.value)}>
            <option value="" disabled default selected>
                Filter By Activity
            </option>
            {activities.map(activity => {
                return <option key={activity}>{activity.name}</option>
        })}
        </select>
        <br/>
        <br/>
        {orderedUsers.map((user) => (
            <div className="user-preview" key={user.id}>
            <div className="card-1">
            <Link to={`/all/${user.id}`}>
                <img src={user.image}alt="userImage"/>
                <h3>{user.bio}</h3>
                <h1>{user.first_name}</h1>
            </Link>
            </div>
            </div>
        ))}
        </div>
     );
}
 
export default AllUsersList;