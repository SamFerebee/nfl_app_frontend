import React, {useState, useEffect} from "react"

const PlayerHighlight = ({player}) => {
    const [statDisplay, setStatDisplay] = useState(null); 

    useEffect(()=>{
        if(player.position === "Quarterback"){
            setStatDisplay(
                <>
                    <p>Accuracy: {player.accuracy}</p>
                    <p>Throw power: {player.throw_power} </p>
                    <p>Speed: {player.speed}</p>
                </>
            )
        }else if(player.position === "Runningback"){
            setStatDisplay(
                <>
                    <p>Elusiveness: {player.elusiveness}</p>
                    <p>Power: {player.power}</p>
                    <p>Speed: {player.speed} </p>
                </>
            )
        }else if(player.position ==="Wide Receiver"){
            setStatDisplay(
                <>
                    <p>Catching: {player.catching}</p>
                    <p>Route Running: {player.route_running}</p>
                    <p>Speed: {player.speed}</p>
                </>
            )
        }else if (player.position === "Left Tackle" || player.position === "Right Tackle" || player.position === "Center" || player.position === "Left Guard" || player.position === "Right Guard"){
            setStatDisplay(
                <>
                    <p>Strength: {player.strength}</p>
                    <p>Pass blocking: {player.pass_block}</p>
                    <p>Run blocking: {player.run_block}</p>
                </>
            )
        }else if(player.position === "Tight end"){
            setStatDisplay(
                <>
                    <p>Blocking: {player.blocking}</p>
                    <p>Catching: {player.catching}</p>
                    <p>Speed: {player.speed}</p>
                </>
            )
        }
    },[player])

    return (
        <div>
            <h3>{player.name}</h3>
            <p>Position: {player.position}</p>
            <p>Age: {player.age}</p>
            <p>2021 Salary Cap Hit: {player.contract}</p>
            {statDisplay != null ? statDisplay : null}
            <p>Overall: {player.overall}</p>
            <p><img src={player.image} alt={player.name} /></p>

        </div>
    )

}

export default PlayerHighlight