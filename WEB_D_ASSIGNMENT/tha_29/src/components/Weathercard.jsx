import React from 'react'
import { useSelector } from 'react-redux'

const Weathercard = () => {
    const placedata=useSelector( (state) => state.placedata)
    const theme= useSelector ( (state) => state.theme)
    return (
        <div className="container">
            <div className="row">
            <div className="offset-md-3 col-6 weather">
             <div className={theme ? "card dark":"card"}>
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
    )
}

export default Weathercard;