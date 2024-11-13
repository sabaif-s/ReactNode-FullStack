// src/reducers/index.js
import introReducer from "../redux/intro/introReducer";
import { combineReducers } from "redux";

 const rootReducer = combineReducers({
  intro: introReducer,
});


export default rootReducer;