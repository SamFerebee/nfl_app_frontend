import React, {useState, useEffect} from "react"

const PlayerHighlight = ({player}) => {
    const [statDisplay, setStatDisplay] = useState(null); 

    useEffect(()=>{
        if(player.position === "Quarterback"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Accuracy: {player.accuracy}</p>
                    <p>Throw power: {player.throw_power} </p>
                    <p>Speed: {player.speed}</p>
                </span>
            )
        }else if(player.position === "Runningback"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Elusiveness: {player.elusiveness}</p>
                    <p>Power: {player.power}</p>
                    <p>Speed: {player.speed} </p>
                </span>
            )
        }else if(player.position ==="Wide Receiver"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Catching: {player.catching}</p>
                    <p>Route Running: {player.route_running}</p>
                    <p>Speed: {player.speed}</p>
                </span>
            )
        }else if (player.position === "Left Tackle" || player.position === "Right Tackle" || player.position === "Center" || player.position === "Left Guard" || player.position === "Right Guard"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Strength: {player.strength}</p>
                    <p>Pass blocking: {player.pass_block}</p>
                    <p>Run blocking: {player.run_block}</p>
                </span>
            )
        }else if(player.position === "Tight End"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Blocking: {player.blocking}</p>
                    <p>Catching: {player.catching}</p>
                    <p>Speed: {player.speed}</p>
                </span>
            )
        }else if(player.position === "Left End" || player.position === "Right End" || player.position === "Defensive Tackle" ){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Pass Rush: {player.passrush}</p>
                    <p>Run Stuff: {player.runstuff}</p>
                    <p>Strength: {player.strength}</p>
                </span>
            )
        }else if(player.position === "LOLB" || player.position === "ROLB"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Pass Rush: {player.passrush}</p>
                    <p>Speed: {player.speed}</p>
                    <p>Strength: {player.strength}</p>
                </span>
            )
        }else if(player.position === "MLB"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Tackling: {player.tackling}</p>
                    <p>Coverage: {player.coverage}</p>
                    <p>Speed: {player.speed}</p>
                </span>
            )
        }else if(player.position === "FS" || player.position === "SS"){
            setStatDisplay(
                <span id="statDisplay">
                    <p>Coverage: {player.coverage}</p>
                    <p>Tackling: {player.tackling}</p>
                    <p>Speed: {player.speed}</p>
                </span>
            )
        }else if(player.position === "CB"){
            setStatDisplay(
                <span id="statDisplay">
                    Man Coverage: {player.mancoverage}<br></br><br></br>
                    Zone Coverage: {player.zonecoverage}<br></br><br></br>
                    Speed: {player.speed}
                </span>
            )
        }
    },[player])

    return (
        <div id="playerhighlight">
            <h3>{player.name} <br></br>Overall: {player.overall.toFixed(2)}</h3>
            <span id="playerInfo">
                Position: {player.position}<br></br><br></br>
                Age: {player.age}<br></br><br></br>
                2021 Salary Cap Hit: {player.contract}
            </span>
            {statDisplay != null ? statDisplay : null}
            <p><img id="playerimage" src={player.image} alt={player.name} /></p>

        </div>
    )

}

export default PlayerHighlight