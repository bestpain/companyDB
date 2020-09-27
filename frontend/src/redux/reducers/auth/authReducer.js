import { SIGNIN_SUCCESS, SET_AUTH_ERROR } from "./auth.actionsTypes";

const INITIAL_STATE = {
  currentUser: null,
  authenticated: false,
  authError: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        authenticated: true,
        authError: "",
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.payload,
        currentUser: null,
        authenticated: false,
      };
    default:
      return state;
  }
}
