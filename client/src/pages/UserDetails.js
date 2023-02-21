import {useNavigate, useParams, Link} from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

const UserDetails = ({ allUsers, setMatches, matches}) => {
  const [newMatch, setNewMatch] = useState([])
  const {user, setUser} = useContext(UserContext);
  const [active, setActive] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  const singleUser = allUsers.find(obj => obj.id === parseInt(id))

  const addMatch = (match) => {
    const updatedMatches = [...matches, match]
    const updatedUser = {...user, matches: updatedMatches}
    setUser(updatedUser)
    setNewMatch(match)
    setMatches(updatedMatches)
    setActive(!active);
  }
  console.log(matches)
  console.log(user)

const usersMatch = () => {
  console.log(singleUser)
  fetch("/matches", {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({user_id: user.id, user2_id: singleUser.id})
  })
  .then(r => {
    if (r.ok) {
        r.json().then(addMatch)
        console.log(matches)
    } else {
        r.json().then(error => console.log(error))
    }
  })
}

    return ( 
        <div className="main">
            <button onClick={goBack}>back</button>
        <div className="user-preview" key={user.id}>
          <div>
            <img src={singleUser.image}alt="userImage"/>
            <h4> A little more about {singleUser.first_name}: <br /> {singleUser.bio} <br /> <br /> Rima wants to hang becasue: <br />{singleUser.question}</h4>
            <h1>{singleUser.first_name} {singleUser.last_name}</h1>
            <h2> {singleUser.first_name}'s Activities:{singleUser.activities.map((activity) => (<ul>{activity.name}</ul>))}</h2>
            <Link to="/">
              <button onClick={usersMatch}>Match with {singleUser.first_name}</button>
            </Link>
          </div> 
        </div>
        </div>
        );
}
 
export default UserDetails;


  