import React, {useEffect, useState} from "react"

const OngoingTeam = ({team}) => {
    const [currentTeam, setCurrentTeam] = useState(null);

    useEffect(() => {
       setCurrentTeam(
           <div>
               <h3>Current Team:</h3>
                QB: {team.quarterback}<br></br>
                RB: {team.runningback}<br></br>
                WR: {team.wideout}<br></br>
                TE: {team.tightend}<br></br>
                LT: {team.lefttackle}<br></br>
                LG: {team.leftguard}<br></br>
                C: {team.center}<br></br>
                RG: {team.rightguard}<br></br>
                RT: {team.righttackle}<br></br>
                <br></br><br></br>
                LE: {team.leftend}<br></br>
                RE: {team.rightend}<br></br>
                DT: {team.dtackle}<br></br>
                LOLB: {team.lolb}<br></br>
                MLB: {team.mlb}<br></br>
                ROLB: {team.rolb}<br></br>
                CB: {team.cb}<br></br>
                FS: {team.fs}<br></br>
                SS: {team.ss}
           </div>
       ) 
    }, [team])

    return (
        <>
            {currentTeam === null ? null : currentTeam}
        </>
    )
}

export default OngoingTeam