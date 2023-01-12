import React, { useState } from "react";
import ListedActivities from "./ListedActivities";
import {Link} from "react-router-dom";


const Home = ({allUsers}) => {
    return ( 
        <div className="home-page">
        <ListedActivities allUsers={allUsers} />
        <Link to="/all">
        <button>View All Users</button>
        </Link>
        </div>
     );
}
 
export default Home;