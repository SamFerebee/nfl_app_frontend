import React from "react"

const ScoreDisplay = ({userScore, nflScore}) => {
    const win = <span id="scoreSpan"><br></br>Result: {userScore}-{nflScore} <span style={{color:"#00FF1A"}}><b>WIN</b><br></br></span></span>
    const loss = <span id="scoreSpan"><br></br>Result: {userScore}-{nflScore} <span style={{color:"red"}}><b>LOSS</b><br></br></span></span>
    return(
        <>
            {userScore > nflScore ? win : loss}
        </>
    )
}

export default ScoreDisplay

///edit display