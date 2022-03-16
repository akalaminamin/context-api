import { GET_USERS } from "../types/usersTypes";
import { SET_LOADER, CLOSE_LOADER, ERROR_MESSAGE } from "../types";
export const getUser = async ({ dispatch }) => {
  try {
    dispatch({ type: SET_LOADER });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    dispatch({ type: CLOSE_LOADER });
    dispatch({ type: GET_USERS, payload: users });
  } catch (error) {
    dispatch({ type: CLOSE_LOADER });
    dispatch({ type: ERROR_MESSAGE, payload: error.message });
  }
};
