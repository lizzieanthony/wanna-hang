import {Link} from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user";

const AllUsersList = ({ activities}) => {
    const {user} = useContext(UserContext);
    const [allUsers, setAllUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState(allUsers)
    const [selectedActivity, setSelectedActivity] = useState(null)

    useEffect(() => {
        fetch('/users')
        .then((r) => r.json())
        .then(allUsers => setAllUsers(allUsers));
    }, []);

    const otherUsers = allUsers.filter(users => users.id !== user.id)

    const orderedUsers = [].concat(otherUsers)
        .sort((a, b) => a.first_name > b.first_name ? 1 : -1)
    
    useEffect(() => {
        setFilteredUsers(orderedUsers) 
    }, [allUsers])
    
      useEffect(() => {
        // debugger
        if (selectedActivity === "default") {
          setFilteredUsers(orderedUsers)
        }
        else {
          const activityFilteredUsers = orderedUsers?.filter((user) => selectedActivity == user.activities.map((activity) => activity.id))
          setFilteredUsers(activityFilteredUsers)
        }
      }, [selectedActivity])


    return ( 
        <div className="main">
        <select value={selectedActivity} onChange={e => setSelectedActivity(e.target.value)}>
            <option value="default">
                All Users
            </option>
            {activities.map(activity => {
                return <option key={activity.id} value={activity.id} name={activity.name}>{activity.name}</option>
        })}
        </select>
        <br/>
        <br/>
        {filteredUsers.map((user) => (
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


 // const filterByActivity = activity => {
    //     debugger
    //     setFilteredUsers(
    //         allUsers.filter(user => user.activities.map((activity) => activity.id) == activity.id         
    //         )
    //     )
    // }
