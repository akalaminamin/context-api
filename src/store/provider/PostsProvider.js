import React, { useReducer } from "react";
import { postContext } from "../contexts";
import { postsReducer } from "../reducers";
const PostsProvider = ({ children }) => {
  const [postsState, dispatch] = useReducer(postsReducer, {
    posts: [],
    loader: false,
    error: "",
  });
  return (
    <postContext.Provider value={{ postsState, dispatch }}>
      {children}
    </postContext.Provider>
  );
};

export default PostsProvider;
