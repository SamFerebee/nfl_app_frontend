import React, {useState} from "react"

const CreateAccountForm = ({setCurrentUser, sendToHome}) => {

  const [createFormInfo, setCreateFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmation: ""
  })

  const handleCreateChange = e => {
      const key = e.target.name;
      const val = e.target.value;
      let temp = {...createFormInfo, [key]: val};
      setCreateFormInfo(temp);
  }

  const handleSubmit = e => {
    e.preventDefault();
    createAccount(createFormInfo);
  }

  const createAccount = accountInfo => {
      fetch("http://localhost:3000/create_account", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(accountInfo)
      })
        .then(r=>r.json())
        .then(result => {
          if (result.user){
            setCurrentUser(result.user);
            sendToHome();
            localStorage.setItem("user", result.user);
            localStorage.setItem("token", result.token);
            const token = localStorage.getItem("token");
            if (token){
              fetch("http://localhost:3000/me", {
                headers:{
                  Authorization: `Bearer ${token}`
                },
              })
                .then(r => r.json())
                .then(user => {
                  setCurrentUser(user)
                  sendToHome();
                })
            }
          }else{
            console.log(result)
            alert(result);
          }
        })
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleCreateChange} value={createFormInfo.name}/>
            <p></p><input type="email" name="email" placeholder="Email" onChange={handleCreateChange} value={createFormInfo.email}/>
            <p></p><input type="password" name="password" placeholder="Password" onChange={handleCreateChange} value={createFormInfo.password}/>
            <p></p><input type="password" name="confirmation" placeholder="Confirm Password" onChange={handleCreateChange} value={createFormInfo.confirmation}/>
            <input type="submit"/>
          </form>
        </>
    )
}

export default CreateAccountForm