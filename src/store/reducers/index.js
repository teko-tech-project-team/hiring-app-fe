import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import jobseekerReducer from "./jobseeker";

const reducers = combineReducers({
  jobseekerReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
