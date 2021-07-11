import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inst from './Instructions.jsx'
import Food from './food'

ReactDOM.render(
   <div>
     <Inst />
     <h1 >Watchlist XD</h1>
     <div className="container">
      <Food series="The Family Man-Season 1" hrs="11" date="May 13"/>
      <Food series="The Vampire Diaries" hrs="20" date="May 15" />
      <Food series="The Forgotten Army" hrs="6" date="May 17" />
      <Food series="The Falcon and The Winter Soldier" hrs="10" date="May 19" />
      <Food series="Pataal Lok" hrs="11" date="May 21" />
      <Food series="Breathe Into the shadows" hrs="11" date="May 23" />
      <Food series="The Family Man-Season 2" hrs="11" date="June 25" />
      </div>
   </div>,
  document.getElementById('root')
);

