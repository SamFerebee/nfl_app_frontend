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
                    <span id="compareTeamOpposition">{theTeam.abbreviation}</span>  <span id="compareUserTeam">{userTeam.abbreviation}</span><br></br>
                    <span id="offenseCompareLine">Offense Rating:</span> <span id="offenseCompareRatingOpp">{theTeam.offense_rating.toFixed(2)} </span><span id="offenseCompareRatingUser">{userTeam.offense_rating.toFixed(2)}</span><br></br>
                    <span id="defenseCompareLine">Defense Rating:</span> <span id="defenseCompareRatingOpp">{theTeam.defense_rating.toFixed(2)} </span><span id="defenseCompareRatingUser">{userTeam.defense_rating.toFixed(2)}</span><br></br>
                    <span id="overallCompareLine">Overall:</span> <span id="overallCompareRatingOpp">{theTeam.overall_rating.toFixed(2)}</span><span id="overallCompareRatingUser">{userTeam.overall_rating.toFixed(2)}</span>
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