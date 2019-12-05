import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import userReducer from "./userReducer";
import contactReducer from "./contactReducer";


const rootReducer = combineReducers({projectReducer, userReducer, contactReducer})

export default rootReducer