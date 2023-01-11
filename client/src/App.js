import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import {UserProvider} from "../context/user";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ActivitiesList from "./pages/ActivitiesList";
import {useState, useEffect} from "react";


function App() {

  const [user, setUser] = useState(null)
    
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  if (!user) return <Login setUser={setUser} />

  return (
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <div className="content">
      <Routes >
          <Route path="/" element={<ActivitiesList user={user} />} />
          <Route exact path="/login" element={<Login setUser={setUser} />}/>
        </Routes>
      </div>
        
    </Router>
  );
}

export default App;


