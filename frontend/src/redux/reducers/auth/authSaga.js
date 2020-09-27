import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../auth/auth.actionsTypes";
import { signInSuccess, setAuthError } from "../auth/auth.actions";
import { getFavouriteCompany } from "../company/company.actions";
import { signInApiCall, getFavouriteCompanyApiCall } from "../../../apis";
import "@babel/polyfill";

function* doSignIn({ payload }) {
  const result = yield call(signInApiCall, payload);
  const favourite = yield call(getFavouriteCompanyApiCall, result.token);
  if (result.error) {
    yield put(setAuthError(result.error));
  } else {
    yield put(signInSuccess(result));
    yield put(getFavouriteCompany(favourite));
  }
}

function* watchSignInRequests() {
  yield takeEvery(actions.SIGNIN_REQUEST, doSignIn);
}

const AuthSagas = [fork(watchSignInRequests)];

export default AuthSagas;
