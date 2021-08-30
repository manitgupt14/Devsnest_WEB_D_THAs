const place_dataReducer =(state = {},action) => {
    if(action.type === "update_place_data" )
    state=action.payload;
    return state;
 };
 
 export default place_dataReducer;
