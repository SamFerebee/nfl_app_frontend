import React, {useState} from "react"

const EditPassword = ({user, sendToHome, sendToEdit}) => {
    const [formInfo, setFormInfo] = useState({
        password: "",
        confirmation: ""
    })

    const submit = e => {
        e.preventDefault();
        handleSubmit(formInfo);
    }

    const handleChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...formInfo, [key]: val};
        setFormInfo(temp);
    }

    const handleSubmit = data => {
        const token = localStorage.getItem("token");
        fetch(`http://localhost:3000/edit_password/`,{
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
                if (result === true){
                    sendToHome();
                }else{
                    alert(result)
                }
            })
    }

    return (
        <div id="editPWordForm">
            <form id="updatePasswordForm" onSubmit={submit}>
                <span id="newPasswordField" className="updateText">New Password: <input id="updatePasswordField" name="password" value={formInfo.password} onChange={handleChange} type="password"/> </span> <br></br>
                <span id="confirmNewPasswordField" className="updateText">Confirm Password: <input id="updatePasswordConfirm" name="confirmation" value={formInfo.confirmation} onChange={handleChange}  type="password"/></span><br></br>
                <input id="editPasswordSubmit" type="submit" value="update password" />
            </form>
            <span id="bottomButtons"><button className="interiorButton" onClick={sendToEdit}>Edit Page</button>{"          "}<button className="interiorButton" onClick={sendToHome}>Homepage</button></span>
        </div>
    )
}

export default EditPassword