import {Link} from "react-router-dom";


const MatchesList = ({matchedUsers}) => {
    
    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://www.w3schools.com/howto/img_avatar.png'
      }

    return ( 
        <div>
       
        {matchedUsers.map((user) => (
            <div className="user-preview" key={user.id}>
            <div className="card-1">
            <Link to={`/all/${user.id}`}>
                <img key={user.image} src={user.image}alt="userImage" onError={addDefaultSrc}/>
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