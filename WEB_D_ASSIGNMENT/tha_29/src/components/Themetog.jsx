import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggletheme } from '../actions';

const Themetog = () => {
    const theme = useSelector( (state) => state.theme);
    const dispatch = useDispatch();
    return (
        <div className="themebutton">
     <button  className={theme ? "btn btn-light" : "btn btn-dark"} onClick= { () => {
         dispatch(toggletheme());
 
     }}> {theme ? "Light" :"Dark"}
            </button>
        </div>
    )
}

export default Themetog;
