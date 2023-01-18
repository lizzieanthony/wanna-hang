import { Link } from "react-router-dom";

const NavBar = ({user, setUser}) => {

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
                    <button onClick={handleLogoutClick}>Logout</button>
                    <Link to="/edit_profile">
                    <button>Edit Profile</button>
                    </Link>  
                </div> 
        </div>
        </div>
     );
}
 
export default NavBar;