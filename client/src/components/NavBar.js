import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

const NavBar = ({setMatches}) => {
    const { user, setUser} = useContext(UserContext);

    // const currentUser = (updatedUser) => {
    //     if (user.id === updatedUser.id) {
    //         return updatedUser 
    //     } else {
    //         return user  
    //     } 
    // }
    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
             setUser(null) 
            }
        })
    }

    return ( 
        <div className="nav">
            <Link className="title" to="/">Wanna Hang?</Link> 
            <div className="links">
                <div>
                    <h2>Welcome, {user.first_name}!</h2>
                    <Link to="/">
                    <button onClick={handleLogoutClick}>Logout</button>
                    </Link>
                    <Link to="/edit_profile">
                    <button>Edit Profile</button>
                    </Link>  
                </div> 
        </div>
        </div>
     );
}
 
export default NavBar;