import './App.css';
import {Route , Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Home from './Home';
import About from './About';
import Nav from "./Nav";
import {Authco} from './context/Authco';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Authco>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/profile' component={Profile}></Route>
                <Route exact path='/dashboard' component={Dashboard}></Route>
                </Authco>    
            </Switch>
    </div>
  );
}

export default App;
