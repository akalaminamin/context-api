import { GET_POSTS } from "../types/postsType";
import { SET_LOADER, CLOSE_LOADER, ERROR_MESSAGE } from "../types";
export const getPosts = async ({ dispatch }) => {
  try {
    dispatch({ type: SET_LOADER });
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    dispatch({ type: CLOSE_LOADER });
    dispatch({ type: GET_POSTS, payload: posts });
  } catch (error) {
    dispatch({ type: CLOSE_LOADER });
    dispatch({ type: ERROR_MESSAGE, payload: error.message });
  }
};
