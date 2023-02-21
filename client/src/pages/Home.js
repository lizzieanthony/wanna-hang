import MatchesList from "./MatchesList";
import {Link} from "react-router-dom"
import {useEffect, useState} from "react";


const Home = ({}) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        fetch('/matches')
        .then((r) => r.json())
        .then(matches => setMatches(matches));
    }, []);
    
    console.log(matches)
    const matchedUsers = matches?.map((user) => user.user2)

    return ( 
        <div className="home-page">
        <div className="intro-card">
            <h2> Welcome! <br />  This platform was designed to facilitate a place for people to make connections through joined activities. Scroll through all users below and match with anyone you want to hang with. Once you're matched they will appear on this page with their contact info so you can start hanging. </h2>
            <Link to="/all">
                <button>Let's Hang </button>
            </Link>
        </div>
        
        <br />
        <br />
        <h1>Your Matches</h1>
        <MatchesList matchedUsers={matchedUsers} />
        </div>
     );
}
 
export default Home;