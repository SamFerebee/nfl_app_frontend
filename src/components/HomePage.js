import React, {useEffect, useState} from "react"

const HomePage = ({user, setUser, sendToLanding, sendToCreateTeam, sendToDeleteAcct, sendToEdit, sendToUserTeams}) => {
    const [showUserControls, setShowUserControls] = useState(false);
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sendToLanding();
    }

    const revealUserControls = () => {
        setShowUserControls((s)=>!s);
    }

    const userControlBar = (
        <div id="userControls">
            <br></br>
                <button onClick={handleLogout}>Logout</button><br></br>
                <button onClick={sendToEdit}>Edit Account</button><br></br>
                <button onClick={sendToDeleteAcct}>Delete Account</button> <br></br>
        </div>
    )

    return (
        <div id="homepage">
            <h1 className="hometext">Home</h1>
            <h2 className="hometext">Welcome {user.username} </h2>
            <button id="revealControls" onClick={revealUserControls}></button>
            {showUserControls ? userControlBar : null}
            <span id="homeoptions">
                <br></br><button onClick={sendToUserTeams}>See Your Teams</button>
                <br></br>
                <button onClick={sendToCreateTeam}>Create New Team</button>
            </span>
        </div>
    )
}

export default HomePage