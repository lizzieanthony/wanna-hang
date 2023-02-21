// import {useContext} from "react";
import {Link} from "react-router-dom";
// import { UserContext } from "../context/user";


const MatchesList = ({matches}) => {
    // const { user} = useContext(UserContext);
    console.log(matches)
    
    const matchedUsers = matches?.map((user) => user.user2)

    // let renderedMatches 
    // if(matches){
    //     matches?.map((user) => user.user2)
    // } else {
    //     return null
    // }


    // console.log(matchedUsers)
 
    return ( 
        <div>
       
        {matchedUsers?.map((user) => (
            <div className="user-preview" key={user.id}>
            <div className="card-1">
            <Link to={`/all/${user.id}`}>
                <img key={user.image} src={user.image}alt="userImage"/>
                <h3 key={user.bio}>{user.bio}</h3>
                <h3 key={user.email}>{user.email}</h3>
                <h1 key={user.first_name}>{user.first_name}</h1>
            </Link>
            </div>
            </div>
        ))}
        </div>
     );
}
 
export default MatchesList;