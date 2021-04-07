const LandingPage = ({sendToLogin, sendToCreate}) => {
    return (
        <>
            <button onClick={sendToLogin}>Login</button>
            <button onClick={sendToCreate}>Create Account</button>
        </>
    )
}

export default LandingPage