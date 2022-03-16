import { SET_LOADER, CLOSE_LOADER, ERROR_MESSAGE } from "../types";
import { GET_POSTS } from "../types/postsType";

const postsReducer = (state, { type, payload }) => {
  if (type === SET_LOADER) {
    return {
      ...state,
      loader: true,
    };
  } else if (type === CLOSE_LOADER) {
    return {
      ...state,
      loader: false,
    };
  } else if (type === ERROR_MESSAGE) {
    return {
      ...state,
      error: payload,
    };
  } else if (type === GET_POSTS) {
    return {
      ...state,
      posts: payload,
    };
  }
};

export default postsReducer;
