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
    const [allNflTeams, setAllNflTeams] = useState(null);
    const [opposingTeam, setOpposingTeam] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3000/all_nfl_teams")
            .then(r=>r.json())
            .then(d => {
                setAllNflTeams(d);
                if(season.current_week < 7){
                    let opposition= d.find(team => team.name === season.games[season.current_week - 1].nfl_name);
                    setOpposingTeam(opposition);
                    setMatchupDisplay(
                        <div id="outerPreviewBox">
                        <span id="matchupHeader">
                            <span id="matchupPreviewOppBox">{season.games[season.current_week - 1].nfl_name}<br></br> <img id="matchupPreviewOppLogo" src={opposition.logo} /></span> <span id="matchupVsText">vs</span> <span id="matchupPreviewUserBox">{team.name} <br></br><img id="matchupPreviewUserLogo" src={team.logo} /><br></br></span>
                            <span id="matchupPreviewOppStatsBox">
                                {season.games[season.current_week - 1].nfl_offense} <br></br>
                                {season.games[season.current_week - 1].nfl_defense}<br></br> 
                                {season.games[season.current_week - 1].nfl_overall}<br></br> 
                                </span>
                            <span id="matchupPreviewStatHeaders">
                                Offense<br></br>
                                Defense<br></br>
                                Overall<br></br>
                            </span>
                            <span id="matchupPreviewUserStatsBox">
                                {team.offense_rating.toFixed(0)}<br></br>
                                {team.defense_rating.toFixed(0)}<br></br>
                                {team.overall_rating.toFixed(0)}<br></br>
                            </span>
                            <span id="starPlayersHeader">Star Players</span><br></br>
                            <span id="userStarPics">
                                <img src={team.star_players[0].image} className="starPlayerPic" /><span className="starInfo">{team.star_players[0].name}</span><br></br>
                                <img src={team.star_players[1].image} className="starPlayerPic" /><span className="starInfo">{team.star_players[1].name}</span><br></br>
                                <img src={team.star_players[2].image} className="starPlayerPic" /><span className="starInfo">{team.star_players[2].name}</span><br></br>
                            </span><br></br> 
                            <span id="oppStarPics">
                                <span className="starInfo">{opposition.star_players[0].name}</span><img src={opposition.star_players[0].image} className="starPlayerPic" /><br></br>
                                <span className="starInfo">{opposition.star_players[1].name}</span><img src={opposition.star_players[1].image} className="starPlayerPic" /><br></br>
                                <span className="starInfo">{opposition.star_players[2].name}</span><img src={opposition.star_players[2].image} className="starPlayerPic" /><br></br>
                            </span>
                        </span>
                        </div>
                    )
                }else{
                    setMatchupDisplay(
                        <span id="seasonComplete">
                            Season Complete!
                        </span>
                    )
                }
            })
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