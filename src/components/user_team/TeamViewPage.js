import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

const TeamViewPage = ({user}) => {
    const params = useParams();
    const id = parseInt(params.id);

    const [theTeam, setTheTeam] = useState(null);
    const [teamDisplay, setTeamDisplay] = useState(null)

    useEffect(() => {
        let t = user.teams.find((team) => team.id === id);
        setTheTeam(t);
        setTeamDisplay(<p>
            <h2>Team: {t.name}</h2><br></br>
            Quarterback: {t.quarterback.name}<br></br>
            Runningback: {t.runningback.name}<br></br>
            WR1: {t.wide_receiver.name}<br></br>
            Left tackle: {t.ltackle.name}<br></br>
            Left guard: {t.lguard.name}<br></br>
            Center: {t.center.name}<br></br>
            Right guard: {t.rguard.name}<br></br>
            Right tackle: {t.rtackle.name}<br></br>
            Tightend: {t.tightend.name}
            <br></br><br></br>
            Offense Rating:<br></br>
            Defense Rating: <br></br>
            Overall: <br></br><br></br>

            <button>Simulate a season!</button>
        </p>)
    }, [])


    return (
        <>
            {theTeam === null ? null : teamDisplay}
            {/* <Link to="/home">Return Home</Link> */}
        </>
    )
}

export default TeamViewPage