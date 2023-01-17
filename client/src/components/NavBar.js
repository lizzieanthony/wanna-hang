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
        <nav className="nav">
            <h1><Link to="/">Wanna Hang?</Link> </h1>
            <div className="links">
            {!user ? (
                <Link to="/login">Start Reviewing</Link>
            ) : (
                <div>
                    <h2>Welcome, {user.first_name}!</h2>
                    <button onClick={handleLogoutClick}>Logout</button>
                    <Link to="/edit_profile">
                    <button >Edit Profile</button>
                    </Link>  
                </div>
        )} 
        </div>
        </nav>
     );
}
 
export default NavBar;