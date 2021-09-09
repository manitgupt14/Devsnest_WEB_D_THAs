import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {IncCounter, DecCounter} from './actions';
import {reducerType} from './reducers';

function App() {
  const counter = useSelector((state: reducerType) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => {
        dispatch(DecCounter(2))
      }}>-</button>
      <div>{counter}</div>
      <button onClick={() => {
        dispatch(IncCounter(2))
      }}>+</button>
    </div>
  );
}

export default App;
