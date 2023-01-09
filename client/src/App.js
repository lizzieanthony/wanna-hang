import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// import {UserProvider} from "../context/user";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ActivitiesList from "./pages/ActivitiesList";

function App() {

  // const [user, setUser] = useState(null)
    
  // useEffect(() => {
  //   fetch('/me').then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  
  // if (!user) return <Login setUser={setUser} />

  return (
    // <div>hi</div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivitiesList />} />
          <Route exact path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
