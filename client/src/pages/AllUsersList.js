import {Link} from "react-router-dom";


const AllUsersList = ({allUsers}) => {

    // const orderedUsers = [].concat(allUsers)
    //     .sort((a, b) => a.first_name > b.first_name ? 1 : -1)

    return ( 
        <div className="main">
        <br/>
        <br/>
        {allUsers.map((user) => (
            <div className="user-preview" key={user.id}>
            <div className="card-1">
            <Link to={`/users/${user.id}`}>
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