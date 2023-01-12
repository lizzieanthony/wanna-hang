import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import {UserProvider} from "../context/user";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ActivitiesList from "./pages/ListedActivities";
import AllUsersList from "./pages/AllUsersList";
import Home from "./pages/Home";
import {useState, useEffect} from "react";


function App() {

  const [user, setUser] = useState(null)
  const [allUsers, setAllUsers] = useState([])
    
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

  if (!user) return <Login setUser={setUser} />

  console.log(allUsers)

  return (
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <div className="content">
      <Routes > 
          <Route path="/" element={<Home allUsers={allUsers}/>} />
          <Route exact path="/login" element={<Login setUser={setUser} />}/>
          <Route exact path = "/all" element={<AllUsersList user={user} allUsers={allUsers} />} />

        </Routes>
      </div>
        
    </Router>
  );
}

export default App;


