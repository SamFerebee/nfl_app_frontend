const LandingPage = ({sendToLogin, sendToCreate}) => {
    return (
        <>
            <button onClick={sendToLogin}>Login</button><br></br>
            <button onClick={sendToCreate}>Create Account</button>
        </>
    )
}

export default LandingPage