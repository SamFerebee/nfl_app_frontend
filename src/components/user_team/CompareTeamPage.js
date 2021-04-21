import React, {useEffect, useState} from "react"

const CompareTeamPage = ({userTeam}) => {
    const [allTeams, setAllTeams] = useState([]);
    const [teamsSelect, setTeamsSelect] = useState([]);
    const [teamToCompare, setTeamToCompare] = useState("");
    const [comparedTeamStats, setComparedTeamStats] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/all_nfl_teams")
            .then(r=>r.json())
            .then(d => {
                setAllTeams(d);
                const tempSelect = d.map((team) => <option key={team.name} value={team.name}>{team.name}</option>);
                setTeamsSelect(tempSelect);
            })
    }, [])

    const handleChange = e => {
        setTeamToCompare(e.target.value)
        const theTeam = allTeams.find((team) => team.name === e.target.value);
        if (theTeam){
            setComparedTeamStats( 
                <span id="compareTeamInner">
                    <h2>{theTeam.name} vs {userTeam.name}</h2>
                    Offense Rating: {theTeam.offense_rating.toFixed(2)} vs. {userTeam.offense_rating.toFixed(2)}<br></br>
                    Defense Rating : {theTeam.defense_rating.toFixed(2)} vs. {userTeam.defense_rating.toFixed(2)}<br></br>
                    Overall: {theTeam.overall_rating.toFixed(2)} vs. {userTeam.overall_rating.toFixed(2)}
                </span>
            );
        }
    }

    return (
        <div>
            <select id="compareSelect" onChange={handleChange}>
                <option value="none">Select a Team</option>
                {teamsSelect}
            </select>
            {teamToCompare === "" ? null: comparedTeamStats}
        </div>
    )
}

export default CompareTeamPage