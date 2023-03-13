import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import jobseekerReducer from "./jobseeker";
import RecruiterReducer from "./recruiter";

const reducers = combineReducers({
  jobseekerReducer, RecruiterReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
