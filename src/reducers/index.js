import { combineReducers } from "redux";
import menuDataReducer from "./menuDataReducer";
import userDataReducer from "./userDataReducer";

const rootReducer = combineReducers({
  menu: menuDataReducer,
  user: userDataReducer,
});

export default rootReducer;
