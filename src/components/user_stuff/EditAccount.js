import React, {useState} from "react"

const EditAccount = ({user, sendToHome, sendToEditPassword, setUser}) => {
    const [formInfo, setFormInfo] = useState({
        name: ""
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
                console.log(result);
                setUser(result);
                sendToHome();
            })
    }

    return (
        <div className="login">
            <button onClick={sendToHome}>Return Home</button><br></br>
            <form onSubmit={edit}>
                Username: <input type="text" name="name" value={formInfo.name} onChange={handleChange} placeholder={user.username} /><br></br>
                <input type="submit" />
            </form><br></br>
            <button onClick={sendToEditPassword}>Edit Password</button>

        </div>
    )
}

export default EditAccount