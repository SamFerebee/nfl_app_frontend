import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import CompareTeamPage from "./CompareTeamPage"

const TeamViewPage = ({user, setUser, sendToTeamList, sendToHome}) => {
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
            <span id="teamNameInfo"><img id="viewTeamLogo" src={t.logo} /><h2>Team: {t.name} <button className="interiorButton" id="editTeamNameButton" onClick={enableEdit}>edit name</button> {editName ? editNameForm : null }</h2><br></br><span id="overall">Overall: {t.overall_rating.toFixed(2)}</span></span><br></br>
            <span id="offensePositionsSpan">
                <h3>OFFENSE</h3>
                <span id="offenseRating">{t.offense_rating.toFixed(2)}</span><br></br>
                <span id="qbPos"><span className="posHeader">QB </span><br></br> {t.quarterback.name}<br></br></span>
                <span id="rbPos"><span className="posHeader">RB</span><br></br> {t.runningback.name}<br></br></span>
                <span id="wrPos"><span className="posHeader">WR</span><br></br> {t.wide_receiver.name}<br></br> <span id="wr2Pos">{t.wr2.name}</span></span><br></br>
                <span id="ltPos"><span className="posHeader">LT</span> <br></br> {t.ltackle.name}<br></br></span>
                <span id="lgPos"><span className="posHeader">LG</span><br></br> {t.lguard.name}<br></br></span>
                <span id="cPos"><span className="posHeader">C</span><br></br> {t.center.name}<br></br></span>
                <span id="rgPos"><span className="posHeader">RG</span><br></br> {t.rguard.name}<br></br></span>
                <span id="rtPos"><span className="posHeader">RT</span><br></br> {t.rtackle.name}<br></br></span>
                <span id="tePos"><span className="posHeader">TE</span><br></br> {t.tightend.name}<br></br></span>
            </span>
            <span id="offensePicture">
                <img id="wr1Pic" className="teamPosPic" src={t.wide_receiver.image} alt={t.wide_receiver.name}/>
                <img id="tePic" className="teamPosPic" src={t.tightend.image} alt={t.tightend.name}/>
                <img id="ltPic" className="teamPosPic" src={t.ltackle.image} alt={t.ltackle.name}/>
                <img id="lgPic" className="teamPosPic" src={t.lguard.image} alt={t.lguard.name}/>
                <img id="cPic" className="teamPosPic" src={t.center.image} alt={t.center.name}/>
                <img id="rgPic"className="teamPosPic" src={t.rguard.image} alt={t.rguard.name}/>
                <img id="rtPic" className="teamPosPic" src={t.rtackle.image} alt={t.rtackle.name}/>
                <img id="wr2Pic" className="teamPosPic" src={t.wr2.image} alt={t.wr2.name}/>
                <img id ="qbPic"className="teamPosPic" src={t.quarterback.image} alt={t.quarterback.name}/>
                <img id="rbPic" className="teamPosPic" src={t.runningback.image} alt={t.runningback.name}/>
            </span>
            <span id="defensePositionsSpan">
                <h3>DEFENSE</h3><br></br>
                <span id="defenseRating">{t.defense_rating.toFixed(2)}</span><br></br>
                <span id="lePos"><span className="posHeader">RE</span><br></br> {t.rightend.name}<br></br></span>
                <span id="dtPos"><span className="posHeader">DT</span> <br></br>{t.dtackle.name}<br></br></span>
                <span id="rePos"><span className="posHeader">LE</span> <br></br>{t.leftend.name} <br></br></span>
                <span id="lolbPos"><span className="posHeader">ROLB</span> <br></br>{t.rolb.name} <br></br></span>
                <span id="mlbPos"><span className="posHeader">MLB</span> <br></br>{t.mlb.name} <br></br></span>
                <span id="rolbPos"><span className="posHeader">LOLB</span> <br></br>{t.lolb.name} <br></br></span>
                <span id="cbPos"><span className="posHeader">CB</span><br></br>{t.cb.name}<br></br><span id="cb2Pos">{t.cb2.name}</span></span><br></br>
                <span id="fsPos"><span className="posHeader">FS</span> <br></br>{t.fs.name}<br></br></span>
                <span id="ssPos"><span className="posHeader">SS</span> <br></br>{t.ss.name}<br></br></span>
            </span>
            <span id="defensePicture">
                <img id="rePic" className="teamPosPic" src={t.rightend.image} alt={t.rightend.name}/>
                <img id="dtPic" className="teamPosPic" src={t.dtackle.image} alt={t.dtackle.name}/>
                <img id="lePic" className="teamPosPic" src={t.leftend.image} alt={t.leftend.name}/>
                <img id="rolbPic" className="teamPosPic" src={t.rolb.image} alt={t.rolb.name}/>
                <img id="mlbPic" className="teamPosPic" src={t.mlb.image} alt={t.mlb.name}/>
                <img id="lolbPic" className="teamPosPic" src={t.lolb.image} alt={t.lolb.name}/>
                <img id="cbPic" className="teamPosPic" src={t.cb.image} alt={t.cb.name}/>
                <img id="cb2Pic" className="teamPosPic" src={t.cb2.image} alt={t.cb2.name}/>
                <img id="fsPic" className="teamPosPic" src={t.fs.image} alt={t.fs.name}/>
                <img id="ssPic" className="teamPosPic" src={t.ss.image} alt={t.ss.name}/>
            </span>
            <br></br><br></br>
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
    
            <button  className="interiorButton" id="compareButton" onClick={() => setCompare((s)=>!s)}>Compare Team</button>
            {compare ? <span id="compareBox"><CompareTeamPage userTeam={theTeam}/></span> : null}
            <span id="seasonBox">{showSeasons}</span><br></br><br></br>
            <button  className="interiorButton" id="deleteTeamButton" onClick={deleteTeam}>Delete This Team</button>
            <br></br><br></br>
            <button  id="teamReturnHome" className="interiorButton" onClick={sendToHome}>Homepage</button>
        </>
    )
}

export default TeamViewPage