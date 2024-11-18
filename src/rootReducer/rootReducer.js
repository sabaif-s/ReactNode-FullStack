// src/reducers/index.js
import introReducer from "../redux/intro/introReducer";
import LightReducer from "../redux/intro/lightReduce";
import { combineReducers } from "redux";

 const rootReducer = combineReducers({
  intro: introReducer,
  light:LightReducer
});


export default rootReducer;