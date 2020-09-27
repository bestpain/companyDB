import {
  SEARCH_COMPANY_REQUEST,
  SEARCH_RESULTS,
  GET_FAVOURITE_COMPANY,
  MARK_FAVOURITE_COMPANY,
  UNMARK_FAVOURITE_COMPANY,
  TOGGLE_FAVOURITE_DROPDOWN_VISIBILITY,
} from "./company.actionsTypes";

export const searchCompanyRequest = (term) => ({
  type: SEARCH_COMPANY_REQUEST,
  payload: term,
});

export const saveSearchResults = (companies) => ({
  type: SEARCH_RESULTS,
  payload: companies,
});

export const toggleFavouriteDropDownVisibility = () => ({
  type: TOGGLE_FAVOURITE_DROPDOWN_VISIBILITY,
});

export const getFavouriteCompany = (companies) => ({
  type: GET_FAVOURITE_COMPANY,
  payload: companies,
});

export const markFavouriteCompany = (companyId, token) => ({
  type: MARK_FAVOURITE_COMPANY,
  payload: { companyId, token },
});

export const removeFavouriteCompany = (companyId, token) => ({
  type: UNMARK_FAVOURITE_COMPANY,
  payload: { companyId, token },
});
