import React from "react";
import ListedActivities from "./ListedActivities";
import MatchesList from "./MatchesList";
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
        <MatchesList />
        </div>
     );
}
 
export default Home;