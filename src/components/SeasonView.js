import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import ScoreDisplay from "./ScoreDisplay"

const SeasonView = ({user, setUser, sendToTeamView, sendToHome}) => {
    const params = useParams();
    const teamId = parseInt(params.team);
    const team = user.teams.find((t)=> t.id === teamId);
    const seasonId = parseInt(params.season);
    const season = user.seasons.find((s)=> s.id === seasonId);
    const [opponentList, setOpponentList] = useState(null);
    const [recordDisplay, setRecordDisplay] = useState(null);
    const [matchupDisplay, setMatchupDisplay] = useState(null);

    useEffect(()=>{
        const orderedGames = season.games.sort((a,b)=> parseInt(a.week) - (b.week))
        const list = orderedGames.map((s) => <p className="seasonWeek" key={s.id}>Week {s.week} vs. <img className="oppositionLogo" src={s.opplogo}/>{s.nfl_name} {s.played || season.current_week != s.week ? 
        s.played? <ScoreDisplay userScore={s.user_score} nflScore={s.nfl_score} /> : null
        : 
        <button className="weekSimButton" value={s.id} onClick={simGame}>Sim Game</button>}</p>)
        setOpponentList(list);
        setRecordDisplay(
            <span id="seasonRecord">
                Record: <span style={{color:"#00FF1A"}}>{season.wins}</span> - <span style={{color:"red"}}>{season.losses}</span>
            </span>
        )
        if(season.current_week < 7){
            setMatchupDisplay(
                <span id="matchupHeader">
                    {team.abbreviation} vs {season.games[season.current_week - 1].nflabbreviation}<br></br>
                    Offense: {team.offense_rating.toFixed(0)} vs. {season.games[season.current_week - 1].nfl_offense}<br></br>
                    Defense: {team.defense_rating.toFixed(0)} vs. {season.games[season.current_week - 1].nfl_defense}<br></br>
                    Overall: {team.overall_rating.toFixed(0)} vs. {season.games[season.current_week - 1].nfl_overall}<br></br>
                    logo: <img id="matchupOppLogo" src={season.games[season.current_week - 1].opplogo} />
                </span>
            )
        }else{
            setMatchupDisplay(
                <span id="seasonComplete">
                    Season Complete!
                </span>
            )
        }
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
    
    const handleBack =() =>{
        sendToTeamView(team.id);
    }

    return (
        <>
        {opponentList}
        {recordDisplay}<br></br><br></br>
        {matchupDisplay}
        <button className="interiorButton" id="returnToTeamButton" onClick={handleBack}>Team Page</button>
        <button id="teamViewReturn" className="interiorButton" onClick={sendToHome}>Homepage</button>
        </>
    )
}

export default SeasonView