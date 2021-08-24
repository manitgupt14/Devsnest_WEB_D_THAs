import React,{useContext} from "react";
import Context from "./context/Authco";

const About = (props) => {
  const logger =  useContext(Context);
    return (
      <div className="about">
      <h1>About : Public Route</h1>
      <div className="cont" >{(logger.loggin) ? "You logged in" : "You logged out" }</div>
      </div>
    );
}

export default About;