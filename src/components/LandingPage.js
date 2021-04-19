const LandingPage = ({sendToLogin, sendToCreate}) => {
    return (
        <div className="landingBox">
            <button onClick={sendToLogin}>Login</button><br></br><span>or</span><br></br>
            <button onClick={sendToCreate}>Create An Account</button>
        </div>
    )
}

export default LandingPage