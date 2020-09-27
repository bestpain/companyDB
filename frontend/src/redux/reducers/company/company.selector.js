import { createSelector } from "reselect";

const selectCompany = (state) => state.company;

export const getSearchCompanySelector = createSelector(
  [selectCompany],
  (company) => company.result
);

export const getFavouriteCompanySelector = createSelector(
  [selectCompany],
  (company) => company.favourite
);

export const selectFavouriteDropDownVisibility = createSelector(
  [selectCompany],
  (company) => company.favouriteVisible
);
