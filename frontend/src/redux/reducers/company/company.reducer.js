import {
  SEARCH_RESULTS,
  GET_FAVOURITE_COMPANY,
  TOGGLE_FAVOURITE_DROPDOWN_VISIBILITY,
} from "./company.actionsTypes";
import mapKeys from "lodash.mapkeys";

const INITIAL_STATE = {
  result: [],
  favourite: {},
  favouriteVisible: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        result: [...action.payload],
      };
    case GET_FAVOURITE_COMPANY:
      return {
        ...state,
        favourite: { ...mapKeys(action.payload, "_id") },
      };
    case TOGGLE_FAVOURITE_DROPDOWN_VISIBILITY:
      return {
        ...state,
        favouriteVisible: !state.favouriteVisible,
      };
    default:
      return state;
  }
}
