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

const addUserActivities = (activities) => {
    if(checkedState === true) {
        const eventId = activities.map((e) => (e.target.value))
        const filteredActivities = activities.filter(activity => activity.id === eventId)
        return setUser({...user, activities: filteredActivities})
    } else return null;
}

const handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    fetch("/user_activities", {
        method: "POST",
        headers: {
           "Content-Type" : "application/json"
        },
        body: JSON.stringify({activity_ids: []})
    })
    .then((r => {
        if (r.ok) {
            r.json()
            .then(addUserActivities)
        }
    }))
}

console.log(checkedState)

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

// const addUserActivities = (userActivity) => {
//     const filteredActivities = activities.filter(activity => activity.id === userActivity.index)
//     if (checkedState === true) {
//         return filteredActivities
//     } else { return 
//     }
//     setUser({...user, activities: filteredActivities})
// }


//     const filteredActivities = activities.filter((activity) => {
//         if (activity.id === userActivity.index) {
//         }
//     if (checkedState === true) {
//         return filteredActivities
//     } else { return 
//     }
//     setUser({...user, activities: filteredActivities})
// }
    // const isCheckedTrue = activities.map(activity => activity.id == )
// const newUserActivites= [...user.activities, userActivity]
    // const filteredActivities = activities.map(activity => activity.id !==  e.target.value)

 // if checked state is true or not 
    // if true add e.target.value (activity id) to the array of user activities
    // set the user with the selected activities 
//  loop through e.target[0].value to see if checked or not and if checked add id to array and send as body of the request activity ids[]
