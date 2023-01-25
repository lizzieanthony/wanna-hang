import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import {UserProvider} from "../context/user";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import AllUsersList from "./pages/AllUsersList";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import SelectActivities from "./pages/SelectActivities";
import UserDetails from "./pages/UserDetails";
import {useState, useEffect} from "react";


function App() {
  const [user, setUser] = useState(null)
  const [allUsers, setAllUsers] = useState([])
  const [activities, setActivities] = useState([])
    
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/users')
    .then((r) => r.json())
    .then(allUsers => setAllUsers(allUsers));
}, []);

useEffect(() => {
  fetch('/activities')
  .then((r) => r.json())
  .then(activities => setActivities(activities));
}, []);
console.log(activities)

  if (!user) return (
    <Router>
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />}/>
    </Routes> 
    </Router>
  )
    
  console.log(allUsers)

  return (
    <Router>
    <NavBar user={user} setUser={setUser}/>
      <div className="content">
        <Routes > 
          <Route path="/" element={<Home allUsers={allUsers} activities={activities}/>} />
          <Route exact path="/login" element={<Login setUser={setUser} />}/>
          <Route exact path="/setup" element={<SelectActivities activities={activities}/>}/>
          <Route exact path = "/all" element={<AllUsersList user={user} allUsers={allUsers} />} />
          <Route exact path="/edit_profile" element={<UserProfile user={user} setUser={setUser} />}/>
          <Route exact path="/all/:id" element={<UserDetails user={user} setUser={setUser} activities={activities} allUsers={allUsers} />} />
        </Routes>
      </div>
        
    </Router>
  );
}

// <Route exact path="/edit_profile" element={<UserProfile setUser={setUser} />}/>


export default App;


