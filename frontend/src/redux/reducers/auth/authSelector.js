import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const getAuthenticationStatus = createSelector(
  [selectAuth],
  (auth) => auth.authenticated
);

export const selectCurrentUser = createSelector(
  [selectAuth],
  (auth) => auth.currentUser
);

export const selectToken = createSelector(
  [selectCurrentUser],
  (user) => user.token
);

export const getAuthErrorMessage = createSelector(
  [selectAuth],
  (auth) => auth.authError
);
