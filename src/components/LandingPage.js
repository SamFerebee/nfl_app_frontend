const LandingPage = ({sendToLogin, sendToCreate}) => {
    return (
        <>
            <span id="landingText">NFL Season Simulator</span>
            <div className="landingBox">
                <button onClick={sendToLogin}>Login</button><br></br><span>or</span><br></br>
                <button onClick={sendToCreate}>Create An Account</button>
            </div>
        </>
    )
}

export default LandingPage