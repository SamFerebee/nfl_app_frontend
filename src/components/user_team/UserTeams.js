import {Link, useParams} from "react-router-dom";

const UserTeams = ({user, sendToHome}) => {

    const displayTeams = user.teams.map((team) => <li className="teamViewLi" key={team.id}><Link className="aLink" to={`/teams/${team.id}`}> {team.name} </Link> <img id="teamListLogo"src={team.logo} /><br></br> <span id="teamsViewOverall"> Overall: {team.overall_rating.toFixed(2)}</span><br></br></li>)
    return (
        <>  
            <h2 id="yourTeamsListText">Your teams</h2>
            <ol id="listOfTeams">
                {user.teams.length > 0 ? displayTeams : <>You have no teams!</>}
            </ol>
            <br></br><br></br>
            <button id="userTeamHome" className="interiorButton" onClick={sendToHome}>Homepage</button>
            <br></br>
            {/* <Link to="/home">Return Home</Link> */}
        </>
    )
}

export default UserTeams