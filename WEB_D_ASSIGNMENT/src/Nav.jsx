import "./App.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
      <div className="Nav">
      <NavLink  exact activeClassName='active_class' to='/' >Home</NavLink>
      <NavLink  activeClassName='active_class' to='/about' >About</NavLink>
      <NavLink  activeClassName='active_class' to='/profile' >Profile</NavLink>
      <NavLink  activeClassName='active_class' to='/dashboard' >DashBoard</NavLink>
      </div>
    );

}

export default Nav;