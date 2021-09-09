import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {reducerType} from './reducers';
import {useState} from 'react';
import {addNote, deleteNote} from './actions';

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <div>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value);
        }}/>
        <button onClick={()=>{
          dispatch(addNote(input));
          setInput(input);
        }}>Add</button>
      </div>
      <div className="notes">
        {notes.length === 0 ? (
          <h2>Click on Add to add notes</h2>
        ) : (
          <ul>
            {notes.map((note: string, index: number)=>(
            <ul>
              <li key={index}>
                <h3>{note}</h3> <button 
                onClick={()=> {
                  dispatch(deleteNote(index));
                }}>Delete</button>
              </li>
            </ul>
          ))}
          </ul>
        )}
      </div>
      
    </div>
  );
}

export default App;

