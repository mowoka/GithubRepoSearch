import reposReducer from "./repos";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  reposReducer: reposReducer,
});

export default allReducers;
