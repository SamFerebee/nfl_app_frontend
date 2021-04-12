import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

const SeasonView = ({user}) => {
    const params = useParams();
    const teamId = parseInt(params.team);
    const team = user.teams.find((t)=> t.id === teamId);
    const seasonId = parseInt(params.season);
    const season = team.seasons.find((s)=> s.id === seasonId);
    const [opponentList, setOpponentList] = useState(null);
    const [recordDisplay, setRecordDisplay] = useState(null);

    useEffect(()=>{
        const list = season.opponents.map((s) => <p>Week {s.id}: {s.name} <button value={s.name} onClick={simGame}>Simulate Game</button></p>)
        setOpponentList(list);
        setRecordDisplay(
            <>
                <h2>Record: </h2>
                {season.wins} - {season.losses}
            </>
        )
    }, [])

    const simGame = e => {
        console.log(e.target.value);
    }

    return (
        <>
        {opponentList}
        {recordDisplay}
        </>
    )
}

export default SeasonView