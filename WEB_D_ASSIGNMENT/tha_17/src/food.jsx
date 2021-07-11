import "./index.css";

const Food = (prosp) => {
    const {series, hrs , date}=prosp;
   return (
       <div className="block">
        <h3>{series}</h3>
        <h4>Watched this series in {hrs} hrs only  on {date} </h4>
       </div>
   );
}

export default Food;