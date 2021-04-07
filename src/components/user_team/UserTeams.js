import {Link, useParams} from "react-router-dom";

const UserTeams = ({user, sendToHome}) => {

    const displayTeams = user.teams.map((team) => <p key={team.id}><Link to={`/teams/${team.id}`}> {team.name} </Link></p>)
    return (
        <>  
            <h2>Created teams:</h2>
            {user.teams.length > 0 ? displayTeams : <>You have no teams!</>}
            <br></br><br></br>
            <button onClick={sendToHome}>Return to Home</button>
            <br></br>
            {/* <Link to="/home">Return Home</Link> */}
        </>
    )
}

export default UserTeams