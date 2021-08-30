import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePlace, updateplacedata } from '../actions';

const Form = () => {
    const place=useSelector( (state) => state.place_name );
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row">
            <div className="col-12 form">
                   <input type="text" value={place} onChange={ (e) => {
                     dispatch(UpdatePlace(e.target.value));
                   }}/>
                   <button className="btn btn-primary" 
                    onClick={ () => {
                        dispatch(updateplacedata(place));
                    }}
                   >Submit</button>
           </div>
            </div>
        </div>
    )
}

export default Form