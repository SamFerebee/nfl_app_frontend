import React, {useState} from "react"

const EditAccount = ({user, sendToHome, sendToEditPassword, setUser}) => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        email: ""
    })

    const handleChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...formInfo, [key]: val};
        setFormInfo(temp);
    }

    const edit = e => {
        e.preventDefault();
        handleEdit(formInfo);
    }

    const handleEdit = data => {
        const token = localStorage.getItem("token");
        fetch(`http://localhost:3000/edit_account/`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then(r=> r.json())
            .then(result => {
                setUser(result);
                sendToHome();
            })
    }

    return (
        <div className="login">
            <form id="updateUserForm" onSubmit={edit}>
                <span className="updateText">Username:</span> <input id="userUpdateField" type="text" name="name" value={formInfo.name} onChange={handleChange} placeholder={user.username} /><br></br>
                <span id="emailField"><span className="updateText">Email:</span> <input id="emailUpdateField" type="text" name="email" value={formInfo.email} onChange={handleChange} placeholder={user.email} /></span><br></br>
                <input type="submit" id="submitUserInfo" value="Update"/>
            </form><br></br>
            <button id="editPasswordButton" className="interiorButton" onClick={sendToEditPassword}>Edit Password</button><br></br>
            <button  id="editReturnHome" className="interiorButton" onClick={sendToHome}>Homepage</button>
        </div>
    )
}

export default EditAccount