import { Routes, Route } from "react-router-dom"
import {useState, useEffect, useContext} from "react";
import {UserContext} from "./context/user";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import AllUsersList from "./pages/AllUsersList";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import SelectActivities from "./pages/SelectActivities";
import UpdateActivities from "./pages/UpdateActivities";
import UserDetails from "./pages/UserDetails";

function App() {
  const { user, setUser} = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([])
  const [activities, setActivities] = useState([])
  // const [matches, setMatches] = useState([])

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  useEffect(() => {
    // fetch('/matches')
    // .then((r) => r.json())
    // .then(matches => setMatches(matches));

    fetch('/activities')
    .then((r) => r.json())
    .then(activities => setActivities(activities));

    fetch('/users')
    .then((r) => r.json())
    .then(allUsers => setAllUsers(allUsers));

}, []);


console.log("in the app", allUsers, activities)

  if (!user) return (
    <div>
      <Routes>
        <Route path="/" element={<Login allUsers={allUsers} setAllUsers={setAllUsers}/>}/>
      </Routes> 
    </div>
  ) 

  return (
    <div>
    <NavBar />
      <div className="content">
        <Routes > 
          <Route path="/" element={<Home />} />
          <Route exact path="/setup" element={<SelectActivities activities={activities} allUsers={allUsers} setAllUsers={setAllUsers}/>}/>
          <Route exact path="/update" element={<UpdateActivities activities={activities} allUsers={allUsers} setAllUsers={setAllUsers}/>}/>
          <Route exact path = "/all" element={<AllUsersList allUsers={allUsers} activities={activities} />} />
          <Route exact path="/edit_profile" element={<UserProfile allUsers={allUsers} setAllUsers={setAllUsers} />}/>
          <Route exact path="/all/:id" element={<UserDetails allUsers={allUsers} />} />

          </Routes>
      </div>
    </div>
  );
}

export default App;

