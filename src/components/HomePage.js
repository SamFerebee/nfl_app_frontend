import React, {useEffect} from "react"

const HomePage = ({user, setUser, sendToLanding, sendToCreateTeam, sendToDeleteAcct, sendToEdit, sendToUserTeams}) => {

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sendToLanding();
    }

    return (
        <>
            <h1>Home</h1>
            <h2>Welcome {user.username} </h2>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={sendToEdit}>Edit Account Info</button>
            <button onClick={sendToDeleteAcct}>Delete Account</button> <br></br>
            <br></br><button onClick={sendToUserTeams}>See Your Teams</button>
            
            <br></br>
            <button onClick={sendToCreateTeam}>Create New Team</button>
        </>
    )
}

export default HomePage