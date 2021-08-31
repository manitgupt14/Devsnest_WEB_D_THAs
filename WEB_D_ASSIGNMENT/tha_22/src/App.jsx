import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Templ from "./components/Templ";
import Meme from "./components/Meme";

const App = () => {
    const [temp , setTemp]=useState([]);
    const [meme , setMeme]=useState(null);
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.data.memes);
      });
    },[]);
    return (
      <div className="App">
          <h1>Meme Generator App</h1>
          {meme==null ? <Templ temp={temp} setMeme={setMeme} /> : <Meme meme={meme} setMeme={setMeme} />}
          
      </div>
    );
};

export default App;