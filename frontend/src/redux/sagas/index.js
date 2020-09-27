import { all } from "redux-saga/effects";
import AuthSagas from "../reducers/auth/authSaga";
import CompanySaga from "../reducers/company/company.saga";
import "@babel/polyfill";

export default function* rootSaga() {
  yield all([...AuthSagas, ...CompanySaga]);
}
