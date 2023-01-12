import React, { useState } from "react";
import ActivitiesList from "./ActivitiesList";
import {Link} from "react-router-dom";


const Home = ({user}) => {
    return ( 
        <div>
        <ActivitiesList user={user} />
        <Link to="/all">
        <button>View All Users</button>
        </Link>
        </div>
     );
}
 
export default Home;