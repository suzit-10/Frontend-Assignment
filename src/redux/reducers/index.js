import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
  userData: authReducer,
});

export default reducers;
