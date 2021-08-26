import './App.css';
import { Usermail, Username } from './actions/index'
import { useDispatch ,useSelector } from "react-redux";

function App() {
  const name = useSelector( (state)  => state.Login );
  const dispatch= useDispatch();
  const maili =useSelector( (state) => state.Mail);
  return (
    <div className="App">
       <h1>Redux Form</h1>
       <input type="text" placeholder="UserName" onChange= { (e) => {
             dispatch(Username(e.target.value));
       }} /><br />

       <input type="email" placeholder="UserEmail" onChange= {
         (e) => {
          dispatch(Usermail(e.target.value));
         }
       }/>
       <h1>Show</h1>
       <h1>UserName:<span>{name} </span> </h1>
       <h1>Email:<span>{maili}</span> </h1>
    </div>
  );
}

export default App;
