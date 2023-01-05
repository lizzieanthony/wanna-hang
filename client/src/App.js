import {useEffect, useState} from "react";
// import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('/activities')
    .then((r) => r.json())
    .then(activities => setActivities(activities));
  }, []);

  return (
    <div>
    {activities.map((activity) => 
      <h2>{activity.name}</h2>
      )}
    </div>
  );
}

export default App;
