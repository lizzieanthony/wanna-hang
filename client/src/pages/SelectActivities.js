import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate} from 'react-router-dom';
import { UserContext } from "../context/user";
import AllUsersList from "./AllUsersList";

const SelectActivities = ({activities, allUsers, setAllUsers}) => {
    const {user, setUser} = useContext(UserContext);
    const { id } = useParams()
    // const [allUsers, setAllUsers] = useState([])

    const navigate= useNavigate()
    const [checkedState, setCheckedState] = useState(
        new Array(activities.length).fill(false)
    );

    // useEffect(() => {
    //     fetch('/users')
    //     .then((r) => r.json())
    //     .then(allUsers => setAllUsers(allUsers));
    //   }, []);

const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
}
  
const orderedActivities = [].concat(activities)
.sort((a, b) => a.name > b.name ? 1 : -1)

//   const newUser = (activities) => {
//     const newUserActivities = {...user.activities, activities}
//     // user.activities = newUserActivities
//     debugger
//     const filteredUsers = allUsers.filter(user => user.id !== activities.users.map((user) => user.id))
//     const newUsers = [...filteredUsers, user]
    
//     // const updatedUsers = [...allUsers, addedUser]
//     setUser(user)
//     setAllUsers(newUsers)
//   }

// const newUser = (activities, ) => {
//     const newUserActivities = {...user.activities, activities}
//     // if user === id replace with new user object with updated activited if not return user 
//     const updatedUsers = [...allUsers, newUserActivities]
//     setUser(user)
//     setAllUsers(updatedUsers)
// }

// const newUser = (addedUser) => {
//     const updatedUsers = [...allUsers, addedUser]
//     setUser(addedUser)
//     setAllUsers(updatedUsers)
//   }

const handleSubmit = (e) => {
    e.preventDefault()
    // console.log( e.target)
    let formActivityIds = [];
    for (let i = 0; i < e.target.length -1 ; i++ ){
        if (e.target[i].checked) formActivityIds.push(parseInt(e.target.elements[i].value))
        // debugger
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
            // .then(newUser)
            // .then((user) => setUser(user))
            .then(userObj => {
                const updateAllUsers = allUsers.map(obj => {
                    if (obj.id === user.id) { debugger
                        // user.activities.push(addActivities)
                        return userObj 
                    } else {
                        return obj
                    }
                })
                setUser(userObj)
                setAllUsers(updateAllUsers)
            })
            // .then((user) => setUser(user))
            // .then((allUsers) => setAllUsers(allUsers))
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

// const checkedActivitiesArray = () => {
//     let checkedActivities = [];
//     for (let i = 0; i < e.target[i] ){
//         const foundActivities = e.target[i].find(value => value === e.target.value )
//         if (foundActivities) checkedActivities.push(foundActivities)   
//     }
//     return checkedActivities
// }

// const checkedActivitiesArray = () => {
    //     if(checkedState === true){   
    //         console.log(formActivityIds) 
    //     }     
    // }
    // console.log(checkedActivitiesArray)

// const handleSetFilteredPosts = () => {
//     let userPosts
//     if (selectedCategory !== "default") {
//       userPosts = user?.posts?.filter((post) => post?.user_id == user?.id && selectedCategory == post?.category_id)
//     } else {
//       userPosts = user?.posts?.filter((post) => post?.user_id == user?.id)
//     }
//     const uniqueUserPostIds = userPosts?.map(post => post?.id).filter((value, index, self) => self.indexOf(value) === index)
//     const filteredUserPosts = []
//     for (const postId of uniqueUserPostIds) {
//       const foundPost = userPosts?.find(post => post.id === postId)
//       if (foundPost) filteredUserPosts.push(foundPost)
//     }
//     setFilteredPosts(filteredUserPosts?.reverse())
//   }
  // for (const postId of uniqueUserPostIds) {
        //       const foundPost = userPosts?.find(post => post.id === postId)
        //       if (foundPost) filteredUserPosts.push(foundPost)

// const addUserActivities = (activities) => {
//     if(checkedState === true) {
//         const eventId = activities.map((e) => (e.target.value))
//         const filteredActivities = activities.filter(activity => activity.id === eventId)
//         return setUser({...user, activities: filteredActivities})
//     } else return null;
// }

 // const foundActivities = e.target[i].find(value => value === e.target[i].value )
        // if (foundActivities) checkedActivities.push(foundActivities) 
        // return checkedActivities

    //   previoous for loop  
            // if (e.target[i].checked ) {
            //     formActivityIds[e.target.elements[i].getAttribute("value")] = e.target.elements[i].value; 
            // }

            // for loop let i = 0 e.target[i] e.target.for each? set the moment when you stop looping 
// send user back with activities nexted so update user with activity object 
// prepare what to send to server
// i < 5 - how do we find 5 '=
// 

// updatedUsers= [...allUsers, user]
// const addActivities = (updatedProfile) => {
//     const updateAllUsers = allUsers.map((user) => {
//         if (user.id === updatedProfile.id) {
//             return updatedProfile 
//         } else {
//             return user  
//         } 
//     });
//     // const updatedActivities= {...user, activities: updateAllUsers}
//     setUser(updatedProfile)
//     setAllUsers(updateAllUsers)
//   }