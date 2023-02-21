import React, { useState, useContext } from "react";
import { useNavigate} from 'react-router-dom';
import { UserContext } from "../context/user";

const SelectActivities = ({activities, allUsers, setAllUsers}) => {
    const {user, setUser} = useContext(UserContext);
    const navigate= useNavigate()
    const [checkedState, setCheckedState] = useState(
        new Array(activities.length).fill(false)
    );

const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
}
  
const orderedActivities = [].concat(activities)
.sort((a, b) => a.name > b.name ? 1 : -1)



const handleSubmit = (e) => {
    e.preventDefault()
    let formActivityIds = [];
    for (let i = 0; i < e.target.length -1 ; i++ ){
        if (e.target[i].checked) formActivityIds.push(parseInt(e.target.elements[i].value))
    }
    console.log(formActivityIds)
    fetch("/user_activities", {
        method: "POST",
        headers: {
           "Content-Type" : "application/json"
        },
        body: JSON.stringify({activity_ids: formActivityIds})
    })
    .then((r => {
        if (r.ok) {
            r.json()
            .then(userObj => {
                const updateAllUsers = allUsers.map(obj => {
                    if (obj.id === user.id) { 
                        return userObj 
                    } else {
                        return obj
                    }
                })
                setUser(userObj)
                setAllUsers(updateAllUsers)
            })
            navigate("/")
            }
    }))
}

console.log(checkedState)

    return ( 
        <div className="check-list">
        <form onSubmit={handleSubmit}>
        <div >
        <h5>Check the activities you are interested in</h5>
        {orderedActivities.map((activity, index) => {
            return (
                <ul key={index}>
                <input 
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={activity.name}
                value={activity.id}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>  {activity.name}</label>
                </ul>
                
            )
        }
        )}
        <button className='newButton' type="submit">Save Activities</button>
        </div>
        </form>
        </div>
     );
}
 
export default SelectActivities;

