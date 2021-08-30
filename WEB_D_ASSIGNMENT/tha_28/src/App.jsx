import 'bootstrap/dist/css/bootstrap.min.css' 
import { useState } from 'react';
import './App.css';

function App() {
  const [place ,setPlace]=useState("");
  const [placedata ,setPlacedata] = useState({});
  const [theme , setTheme] = useState(false);
  const updateData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=48c6f1252e82486ab0d144719212708&q=${place}`)
    .then(res => res.json())
    .then(data => {
      setPlacedata(data);
    })
  }
  return (
    <div className={theme ? "App" : "Appdark"}>
          <button className={theme ? "btn btn-light" : "btn btn-dark"} onClick= {
            () => {
              setTheme(!theme);
            }
          }>{theme ? "Light" : "Dark"}</button>
           <div className="container">
             <div className="row">
             <div className="col-12 form">
                   <input type="text" value={place} onChange={ (e) => {
                     setPlace(e.target.value);
                   }}/>
                   <button className="btn btn-primary" 
                  onClick={updateData}
                   >Submit</button>
           </div>
           <div className="offset-md-3 col-6 weather">
             <div className={theme ? "card" : "carddark"}>
               {
                 placedata.location ? ( <div>
                   <div className="dta">
                   <img src={placedata.current.condition.icon} alt="" />
                   <h1>{placedata.current.temp_c}°</h1>
                   <h6>{placedata.current.condition.text}</h6>
                   <h3>{placedata.location.name}</h3>
                   </div>
                   <table>
                     <tr>
                       <th>Wind Now</th>
                       <th>Humidity</th>
                       <th>Precipitation</th>
                     </tr>
                     <tr>
                       <td>{placedata.current.wind_kph}<sub>KM</sub> </td>
                       <td>{placedata.current.humidity}<sub>%</sub> </td>
                       <td>{placedata.current.precip_in}<sub>%</sub> </td>
                     </tr>
                   </table>
                 </div> ) :
                 <h2>Place Not Found</h2>
               }
             </div>
           </div>
             </div>
           </div>
    </div>
  );
}

export default App;
