const placeReducer =(state = "" ,action) => {
        if(action.type === "update_place" )
        state=action.payload;
        return state;
};
     
export default placeReducer;