import { takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "../company/company.actionsTypes";
import {
  getFavouriteCompany,
  saveSearchResults,
} from "../company/company.actions";
import {
  markFavouriteCompanyApiCall,
  unmarkFavouriteCompanyApiCall,
  searchCompanyApiCall,
} from "../../../apis";
import "@babel/polyfill";

function* searchResults({ payload }) {
  try {
    const result = yield call(searchCompanyApiCall, payload);
    yield put(saveSearchResults(result));
  } catch (e) {
  }
}

function* watchSearchCompanyRequests() {
  yield takeLatest(actions.SEARCH_COMPANY_REQUEST, searchResults);
}

function* markFavourite({ payload: { companyId, token } }) {
  try {
    const result = yield call(markFavouriteCompanyApiCall, companyId, token);
    yield put(getFavouriteCompany(result));
  } catch (e) {
  }
}

function* watchMarkCompanyRequest() {
  yield takeLatest(actions.MARK_FAVOURITE_COMPANY, markFavourite);
}

function* unmarkFavourite({ payload: { companyId, token } }) {
  try {
    const result = yield call(unmarkFavouriteCompanyApiCall, companyId, token);
    yield put(getFavouriteCompany(result));
  } catch (e) {
  }
}

function* watchUnMarkCompanyRequest() {
  yield takeLatest(actions.UNMARK_FAVOURITE_COMPANY, unmarkFavourite);
}

const CompanySaga = [
  fork(watchSearchCompanyRequests),
  fork(watchMarkCompanyRequest),
  fork(watchUnMarkCompanyRequest),
];

export default CompanySaga;
