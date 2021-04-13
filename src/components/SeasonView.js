import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import ScoreDisplay from "./ScoreDisplay"

const SeasonView = ({user, setUser}) => {
    const params = useParams();
    const teamId = parseInt(params.team);
    const team = user.teams.find((t)=> t.id === teamId);
    const seasonId = parseInt(params.season);
    const season = user.seasons.find((s)=> s.id === seasonId);
    const [opponentList, setOpponentList] = useState(null);
    const [recordDisplay, setRecordDisplay] = useState(null);

    useEffect(()=>{
        const list = season.games.map((s) => <p key={s.id}>Week {s.week} vs. {s.nfl_name} {s.played ? <ScoreDisplay userScore={s.user_score} nflScore={s.nfl_score} /> : <button value={s.id} onClick={simGame}>Simulate Game</button>}</p>)
        setOpponentList(list);
        setRecordDisplay(
            <>
                <h2>Record: </h2>
                {season.wins} - {season.losses}
            </>
        )
    }, [user])

    const simGame = e => {
        fetch("http://localhost:3000/playgame",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({user: user.id, season: season.id, game: e.target.value})
        })
            .then(r=>r.json())
            .then(d=>setUser(d))
    }

    return (
        <>
        {opponentList}
        {recordDisplay}
        </>
    )
}

export default SeasonView