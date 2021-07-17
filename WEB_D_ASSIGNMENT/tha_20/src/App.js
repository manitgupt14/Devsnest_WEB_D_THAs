import Inst from './Instructions.jsx';
import './index.css';
import Main from './food';
import {useState} from "react";



function Movies(){
    const [arr ,setArr] = useState([
        ["The Family Man-Season 1",11,"May 13",0],
        ["The Vampire Diaries",20,"May 15",1],
        ["The Forgotten Army",6,"May 17",2],
        ["The Falcon and The Winter Soldier",10,"May 19",3],
        ["Pataal Lok",11,"May 21",4],
        ["Breathe Into the shadows",11,"May 23",5],
        ["The Family Man-Season 2",11,"June 25",6]]);
    return (
        <div>
        <Inst />
        <h1 >Watchlist XD</h1>
        <div className="container">
         {
            arr.length ? arr.map(
                 item =>
                 <Main series={item[0]} hrs={item[1]} date={item[2]} index={item[3]} arr={arr} setArr={setArr} />
             ):<h1>No Values</h1>
         }
         </div>
      </div>
    );
}

export default Movies;