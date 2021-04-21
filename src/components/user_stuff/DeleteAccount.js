import React from "react"

const DeleteAccount = ({user, setUser, sendToLanding, sendToHome}) =>{

    const deleteAccount = () => {
        const token = localStorage.getItem("token");
        fetch(`http://localhost:3000/delete_account/`,{
            method: "DELETE",
            headers:{
                Authorization: `Bearer ${token}`
              }
        })
            .then(r=>r.json())
            .then(console.log)
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sendToLanding();
    }

    return (
        <>
            <h3 id="deleteAccountText">Are you sure you want to delete your account?</h3>
            <button  id="deleteAccountButton" className="interiorButton" onClick={deleteAccount}>Delete</button>
            <button id="deleteReturnHome" className="interiorButton" onClick={sendToHome}>HomePage</button>
        </>
    )
}

export default DeleteAccount