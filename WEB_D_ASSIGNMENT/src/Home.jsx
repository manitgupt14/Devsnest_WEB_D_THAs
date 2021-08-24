import { useContext} from "react";
import Context from "./context/Authco";


const Home = (props) => {
    const logger =  useContext(Context);
     return (
      <div className="Home">
      <h1>Home</h1>
      <h2>{logger.loggin ? "You're logged in , Now You can access Profile and Dashboard" : "You're logged out , You can't access Profile and Dashboard" }</h2>
      {
          logger.load ? "Loading.....":logger.loggin? 
          <button onClick={logger.logout}>Logout</button>:

          <button onClick={logger.login}>Login</button>
      }
      </div>
    );
}

export default Home;