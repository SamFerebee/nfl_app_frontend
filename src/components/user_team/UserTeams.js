import {Link, useParams} from "react-router-dom";

const UserTeams = ({user, sendToHome}) => {

    const displayTeams = user.teams.map((team) => <p key={team.id}><Link className="aLink" to={`/teams/${team.id}`}> {team.name} </Link> Overall: {team.overall_rating.toFixed(2)}</p>)
    return (
        <>  
            <h2>Your teams:</h2>
            {user.teams.length > 0 ? displayTeams : <>You have no teams!</>}
            <br></br><br></br>
            <button id="userTeamHome" className="interiorButton" onClick={sendToHome}>Homepage</button>
            <br></br>
            {/* <Link to="/home">Return Home</Link> */}
        </>
    )
}

export default UserTeams