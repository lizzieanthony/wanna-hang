import {Link} from "react-router-dom";


const AllUsersList = ({allUsers}) => {
    return ( 
        <div>
        {allUsers.map((user) => (
            <div className="userp-preview" ley={user.id}>
            <Link to={`/users/${user.id}`}>
            <h1>{user.first_name}</h1>
            </Link>
            </div>
        ))}
        </div>
     );
}
 
export default AllUsersList;