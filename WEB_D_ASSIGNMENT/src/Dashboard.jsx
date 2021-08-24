import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "./context/Authco";

const Dashboard = (props) => {
  const logger =  useContext(Context);
    return (
      <div className="dash">
        <Route>
         {
           logger.loggin ? <h1>Welcome to DashBoard</h1> : <Redirect to='/' />
           }
        </Route>
      </div>
    );
}

export default Dashboard;