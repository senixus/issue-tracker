import { combineReducers } from "redux";
import { authReducers } from "./authReducer/authReducers";
import { issueReducers } from "./issueReducer/issueReducers";

const rootReducers = combineReducers({
  auth: authReducers,
  issues: issueReducers,
});

export default rootReducers;
