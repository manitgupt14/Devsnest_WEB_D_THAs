const UpdatePlace = (place) => {
    return {
        type: "update_place",
        payload: place,
    };
};

const updateplacedata = (place) =>{
    return (dispatch)=>{
     fetch(`https://api.weatherapi.com/v1/current.json?key=48c6f1252e82486ab0d144719212708&q=${place}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
          type : "update_place_data",
          payload: data,
      })
    })
    };
};

const toggletheme = () => {
    return {
        type:"TOGGLE",
    };

};

export {updateplacedata,UpdatePlace,toggletheme};