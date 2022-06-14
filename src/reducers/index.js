import CounterReducer from "./Counter";
import { combineReducers } from "redux";
import IsLoggedReducer from "./IsLogged";

const allReducers = combineReducers({
  counter: CounterReducer,
  isLogged: IsLoggedReducer,
});
export default allReducers;