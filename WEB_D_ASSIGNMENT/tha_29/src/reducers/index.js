import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import place_dataReducer from "./place_dataReducer";
import toggle from "./toggle";

const rootReducer =combineReducers ( {
    place_name :placeReducer,
    placedata : place_dataReducer,
    theme : toggle,
});

export default rootReducer;