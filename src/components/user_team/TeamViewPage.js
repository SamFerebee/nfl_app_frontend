import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import CompareTeamPage from "./CompareTeamPage"

const TeamViewPage = ({user, setUser, sendToTeamList}) => {
    const params = useParams();
    const id = parseInt(params.id);
    const [compare, setCompare] = useState(false);
    const [theTeam, setTheTeam] = useState(null);
    const [teamDisplay, setTeamDisplay] = useState(null)
    const [showSeasons, setShowSeasons] = useState(null);
    const [editName, setEditName] = useState(false);
    const [newName, setNewName] = useState({name: ""});

    const handleEditNameSubmit = e => {
        e.preventDefault();
        setEditName((s)=>!s);
        fetch(`http://localhost:3000/${user.id}/${theTeam.id}/change_name`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: newName.name})
        })
            .then(r=>r.json())
            .then(d=>{
                setUser(d);
                setNewName("");
            })
    }

    const nameChange = e => {
        const key = e.target.name;
        const temp = {...newName, [key]: e.target.value};
        setNewName(temp);
    }

    const enableEdit = () =>{
        setEditName((s)=>!s)
    }

    const editNameForm = (
        <form onSubmit={handleEditNameSubmit}>
            <input type="text" name="name" placeholder="New Name" onChange={nameChange} value={newName.name} /> <input type="submit" />
        </form>
    )

    useEffect(() => {
        let t = user.teams.find((team) => team.id === id);
        setTheTeam(t);
        setTeamDisplay(<div>
            <h2>Team: {t.name} <button className="interiorButton" id="editTeamNameButton" onClick={enableEdit}>edit name</button> {editName ? editNameForm : null }</h2><br></br>
            Quarterback: {t.quarterback.name}<br></br>
            Runningback: {t.runningback.name}<br></br>
            WR1: {t.wide_receiver.name}<br></br>
            WR2: {t.wr2.name}<br></br>
            Left tackle: {t.ltackle.name}<br></br>
            Left guard: {t.lguard.name}<br></br>
            Center: {t.center.name}<br></br>
            Right guard: {t.rguard.name}<br></br>
            Right tackle: {t.rtackle.name}<br></br>
            Tightend: {t.tightend.name}
            <br></br><br></br>
            Leftend: {t.leftend.name}<br></br>
            Defensive Tackle: {t.dtackle.name}<br></br>
            Rightend: {t.rightend.name} <br></br>
            LOLB: {t.lolb.name} <br></br>
            MLB: {t.mlb.name} <br></br>
            ROLB: {t.rolb.name} <br></br>
            CB: {t.cb.name}<br></br>
            CB2: {t.cb2.name}<br></br>
            FS: {t.fs.name}<br></br>
            SS: {t.ss.name}<br></br>
            <br></br><br></br>
            Offense Rating: {t.offense_rating.toFixed(2)}<br></br>
            Defense Rating: {t.defense_rating.toFixed(2)}<br></br>
            Overall: {t.overall_rating.toFixed(2)}<br></br><br></br>
        </div>);
        const tseason = t.seasons.map((s, index) => <p key={s.id}><Link className="aLink" className="aLink" to={`/play/${t.id}/${s.id}`}> Season {index + 1} </Link> </p>)
        setShowSeasons(tseason);
    }, [editName, newName])

    const generateSeason = () => {
        fetch("http://localhost:3000/create_season",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: user.id, team: theTeam.id})
        })
            .then(r=>r.json())
            .then(d => {
                setUser(d);
                let t = d.teams.find((team) => team.id === id);
                const tseason = t.seasons.map((s, index) => <p key={s.id}><Link to={`/play/${t.id}/${s.id}`}> Season {index + 1} </Link> </p>)
                setShowSeasons(tseason);
            })
    }

    const deleteTeam = e => {
        fetch(`http://localhost:3000/delete_team/${user.id}/${theTeam.id}`,{
            method: "DELETE",
        })
            .then(r=> r.json())
            .then(d=>{
                setUser(d);
                sendToTeamList();
            })
    }

    return (
        <>
            {theTeam === null ? null : teamDisplay}
            <br></br>
            <button id="generateSeasonBtn" className="interiorButton" onClick={generateSeason}>Generate a season!</button>
            <button  className="interiorButton" onClick={() => setCompare((s)=>!s)}>Compare Team</button>
            {compare ? <CompareTeamPage userTeam={theTeam}/> : null}
            {showSeasons}<br></br><br></br>
            <button  className="interiorButton" onClick={deleteTeam}>Delete This Team</button>
            <br></br><br></br>
            <Link className="aLink" to="/home">Return Home</Link>
        </>
    )
}

export default TeamViewPage