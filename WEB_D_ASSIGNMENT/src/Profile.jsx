import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "./context/Authco";

const Profile = () => {
  const logger =  useContext(Context);
    return (
      <div className="profile">
        <Route>
         {
           logger.loggin ? <h1>Welcome to Profile</h1> : <Redirect to='/' />
           }
        </Route>
      </div>
    );
}

export default Profile;