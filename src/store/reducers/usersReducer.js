import { GET_USERS } from "../types/usersTypes";
import { SET_LOADER, CLOSE_LOADER, ERROR_MESSAGE } from "../types";

const usersReducer = (state, action) => {
  if (action.type === SET_LOADER) {
    return {
      ...state,
      loader: true,
    };
  } else if (action.type === CLOSE_LOADER) {
    return {
      ...state,
      loader: false,
    };
  } else if (action.type === GET_USERS) {
    return {
      ...state,
      users: action.payload,
    };
  } else if (action.type === ERROR_MESSAGE) {
    return {
      ...state,
      error: action.payload,
    };
  }
};

export default usersReducer;
