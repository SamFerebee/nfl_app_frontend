import React, {useState} from "react"

const EditPassword = ({user, sendToHome}) => {
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
        <div className="login">
            <form onSubmit={submit}>
                New Password: <input name="password" value={formInfo.password} onChange={handleChange} type="password"/>
                Confirm Password: <input name="confirmation" value={formInfo.confirmation} onChange={handleChange}  type="password"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default EditPassword