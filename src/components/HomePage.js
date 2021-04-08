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
                <button onClick={handleLogout}>Logout</button>
                <button onClick={sendToEdit}>Edit Account Info</button>
                <button onClick={sendToDeleteAcct}>Delete Account</button> <br></br>
        </div>
    )

    return (
        <>
            <h1>Home</h1>
            <h2>Welcome {user.username} </h2>
            <button id="revealControls" onClick={revealUserControls}>User Controls</button>
            {showUserControls ? userControlBar : null}
            <br></br><button onClick={sendToUserTeams}>See Your Teams</button>
            <br></br>
            <button onClick={sendToCreateTeam}>Create New Team</button>
        </>
    )
}

export default HomePage