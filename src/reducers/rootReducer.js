import { combineReducers } from "redux";
import Main from "../Main/reducer.js";

// All reducers will be combined here before being used in store/configure_store
const rootReducer = combineReducers({
  Main
});

export default rootReducer;