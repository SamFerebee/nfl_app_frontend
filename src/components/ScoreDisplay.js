import React from "react"

const ScoreDisplay = ({userScore, nflScore}) => {
    const win = <>{userScore}-{nflScore} <span style={{color:"green"}}><b>WIN</b></span></>
    const loss = <>{userScore}-{nflScore} <span style={{color:"red"}}><b>LOSS</b></span></>
    return(
        <>
            {userScore > nflScore ? win : loss}
        </>
    )
}

export default ScoreDisplay