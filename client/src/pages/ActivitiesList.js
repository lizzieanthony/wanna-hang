import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const ActivitiesList = () => {
    const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('/activities')
    .then((r) => r.json())
    .then(activities => setActivities(activities));
  }, []);
    
    return ( 
      <div>
      <br />
        {activities.map((activity) => (
            <div className="activityList" key={activity.id}>
              <Link to={`/activities/${activity.name}`} >
                <h2>{activity.name}</h2>
              </Link>
            </div>
        ))}
      </div>
     );
}
 
export default ActivitiesList;

  // {activities.map((activity) => 
        //     <h2>{activity.name}</h2>
        //     )}