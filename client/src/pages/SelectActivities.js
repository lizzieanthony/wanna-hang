import React, { useState, useContext } from "react";
import { useParams} from 'react-router-dom';
import { UserContext } from "../context/user";

const SelectActivities = ({activities}) => {
    const {user, setUser} = useContext(UserContext);
    const { id } = useParams()
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

// addUserActivities = (userActivity) => {
//     const newUserActivites= [...user.activities, userActivity]
//     const filteredActivities = activities.filter(activity => activity.id == )

// }

const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/user_activities", {
        method: "POST",
        headers: {
           "Content-Type" : "application/json"
        },
        body: JSON.stringify({activity_id: id})
    })
    .then((r => {
        if (r.ok) {
            r.json()
            .then()
        }
    }))
}

    return ( 
        <div className="check-list">
        <form onSubmit={handleSubmit}>
        <ul >
        {orderedActivities.map((activity, index) => {
            return (
                <ul key={index}>
                <input 
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={activity.name}
                value={activity.name}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>  {activity.name}</label>
                </ul>
            )
        }
        )}
        <button className='newButton' type="submit">Save Activities</button>
        </ul>
        </form>
        </div>
     );
}
 
export default SelectActivities;

// <div className="activityList" key={activity.id}>
//                 <h2>{activity.name}</h2>
//             </div>

// See that state on the component is changing in response to what I click 

// Handle submit function fetch request 
// Url and config object
// Do I have the route what’s the action what’s the code in the action 
// What am I doing when I get it back 

// All user activities for a user has the same user id