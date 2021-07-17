import "./index.css";
import React from 'react';

const Main = ({series, hrs , date ,index ,arr ,setArr}) => {
    const deleteEle = (e) => {
        const modifiedArr = arr.filter((ele) => ele[3] !== index);
        setArr([...modifiedArr]);
      };
    return (
       <div className="block">
       <button onClick={deleteEle}>Delete</button>
        <h3>{index} {series}</h3>
        <h4>Watched this series in {hrs} hrs only  on {date} </h4>
       </div>
   );
}


export default Main;