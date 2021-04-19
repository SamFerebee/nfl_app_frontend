import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "./LandingPage"
import LoginPage from "./user_stuff/LoginPage"
import CreateAccountForm from "./user_stuff/CreateAccountForm"
import HomePage from "./HomePage"
import CreateTeamForm from "./new_team_stuff/CreateTeamForm"
import DeleteAccount from "./user_stuff/DeleteAccount"
import EditAccount from "./user_stuff/EditAccount"
import EditPassword from "./user_stuff/EditPassword"
import UserTeams from "./user_team/UserTeams"
import TeamViewPage from "./user_team/TeamViewPage"
import SeasonView from "./SeasonView"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  ////SEND TO ROUTES
  const sendToLogin = () => history.push("/login");
  const sendToCreateAccount = () => history.push("/create_account")
  const sendToHome = () => history.push("/home")
  const sendToLanding = () => history.push("/")
  const sendToCreateTeam = () => history.push("/create_team")
  const sendToDeleteAcct = () => history.push("/delete_account")
  const sendToEditPassword = () => history.push("/edit_password")
  const sendToEdit = () => history.push("/edit_account")
  const sendToUserTeams = () => history.push("/view_user_teams")

  /////AUTO LOGIN
  useEffect(()=> {
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
          history.push("/home")
        })
    }
  }, [])

  return (
    <div id="body">
      {currentUser === null ? (
        <Switch>
          <Route exact path="/">
            <LandingPage sendToLogin={sendToLogin} sendToCreate={sendToCreateAccount}/>
          </Route>
          <Route exact path="/login">
            <LoginPage setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>
          </Route>
          <Route exact path="/create_account">
            <CreateAccountForm setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>
          </Route>
      </Switch>
      ) : (
        <Switch>
          <Route exact path ="/home">
            <HomePage user={currentUser} setUser={setCurrentUser} sendToLanding={sendToLanding} sendToCreateTeam={sendToCreateTeam} sendToDeleteAcct={sendToDeleteAcct} sendToEdit={sendToEdit} sendToUserTeams={sendToUserTeams}/>
          </Route>
          <Route exact path="/create_team">
            <CreateTeamForm setUser={setCurrentUser} sendToHome={sendToHome} user={currentUser}/>
          </Route>
          <Route exact path ="/view_user_teams">
            <UserTeams user={currentUser} sendToHome={sendToHome}/>
          </Route>
          <Route exact path="/teams/:id">
              <TeamViewPage user={currentUser} setUser={setCurrentUser} sendToTeamList={sendToUserTeams}/>
          </Route>
          <Route exact path="/play/:team/:season">
            <SeasonView user={currentUser} setUser={setCurrentUser} />
          </Route>
          <Route exact path="/delete_account">
            <DeleteAccount setUser={setCurrentUser} user={currentUser} sendToLanding={sendToLanding}/>
          </Route>
          <Route exact path="/edit_account">
            <EditAccount setUser={setCurrentUser} user={currentUser} sendToHome={sendToHome} sendToEditPassword={sendToEditPassword}/>
          </Route>
          <Route exact path="/edit_password">
            <EditPassword user={currentUser} sendToHome={sendToHome} />
          </Route>
        </Switch>
      )}


    </div>
  );
}

export default App;
