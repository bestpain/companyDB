import { combineReducers } from "redux";
import authReducer from "../reducers/auth/authReducer";
import companyReducer from "../reducers/company/company.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  company: companyReducer,
});

export default rootReducer;
