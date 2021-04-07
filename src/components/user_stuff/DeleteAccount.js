import React from "react"

const DeleteAccount = ({user, setUser, sendToLanding}) =>{

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
            <h3>Are you sure you want to delete your account?</h3>
            <button onClick={deleteAccount}>Delete</button>
        </>
    )
}

export default DeleteAccount