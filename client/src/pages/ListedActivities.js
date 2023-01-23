import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const ListedActivities = ({allUsers, activities}) => {
    // const [activities, setActivities] = useState([])

//   useEffect(() => {
//     fetch('/activities')
//     .then((r) => r.json())
//     .then(activities => setActivities(activities));
//   }, []);
// console.log(activities)

const orderedActivities = [].concat(activities)
  .sort((a, b) => a.name > b.name ? 1 : -1)
    
    return ( 
      <div>
      <br />
        {orderedActivities.map((activity) => (
            <div className="activityList" key={activity.id}>
              <Link to={`/activities/${activity.name}`} >
                <h2>{activity.name}</h2>
              </Link>
            </div>
        ))}
      </div>
     );
}
 
export default ListedActivities;

  // {activities.map((activity) => 
        //     <h2>{activity.name}</h2>
        //     )}