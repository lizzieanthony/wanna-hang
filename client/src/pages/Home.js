import React, { useState } from "react";
import ListedActivities from "./ListedActivities";
import {Link} from "react-router-dom";


const Home = ({allUsers, activities}) => {
    return ( 
        <div className="home-page">
        <h2>Find people by activity: </h2>
        <div className="activity-list">
        <ListedActivities allUsers={allUsers} activities={activities} />
        </div>
        <Link to="/all">
        <button>View All Users</button>
        </Link>
        </div>
     );
}
 
export default Home;