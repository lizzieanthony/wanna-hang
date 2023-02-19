import {Link} from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

const AllUsersList = ({ activities, allUsers}) => {
    const {user} = useContext(UserContext);
    // const [allUsers, setAllUsers] = useState([])
    // const [filteredUsers, setFilteredUsers] = useState(allUsers)
    // should be a ternary or condition in the body if slected activitiy is default then selected is all, if not then filter through 
    const [selectedActivity, setSelectedActivity] = useState("default")

    console.log("all users list")

    const otherUsers = allUsers?.filter(users => users.id !== user.id)

    const orderedUsers = [].concat(otherUsers)
        .sort((a, b) => a.first_name > b.first_name ? 1 : -1)

    let filteredUsers  
    if(selectedActivity === "default") {
       filteredUsers = orderedUsers
    } else {
         filteredUsers = orderedUsers?.filter((user) => selectedActivity == user.activities.map((activity) => activity.id))
    } 
    // useEffect(() => {
    //     console.log("in useEffect")
    //     fetch('/users')
    //     .then((r) => r.json())
    //     .then(allUsers => setAllUsers(allUsers));
    // }, []);

    // 
    
    // useEffect(() => {
    //     setFilteredUsers(allUsers) 
    // }, [allUsers])
    
    //   useEffect(() => {
    //     // debugger
    //     if (selectedActivity === "default") {
    //       setFilteredUsers(allUsers)
    //     }
    //     else {
    //       const activityFilteredUsers = allUsers?.filter((user) => selectedActivity == user.activities.map((activity) => activity.id))
    //       setFilteredUsers(activityFilteredUsers)
    //     }
    //   }, [selectedActivity])

    // console.log(filteredUsers)
    console.log(allUsers)
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

