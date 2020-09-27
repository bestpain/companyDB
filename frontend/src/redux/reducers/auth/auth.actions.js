import {
  SIGNIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNOUT_REQUEST,
  SIGNIN_SUCCESS,
  SET_AUTH_ERROR,
} from "./auth.actionsTypes";

export const signInRequest = (user) => ({
  type: SIGNIN_REQUEST,
  payload: user,
});

export const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signOutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  payload: error,
});
