import React, { useContext, useEffect } from "react";
import { getPosts } from "../../store/actions/postsAction";
import { postContext } from "../../store/contexts";

const PostsList = () => {
  const { postsState, dispatch } = useContext(postContext);
  useEffect(() => {
    getPosts({ dispatch });
  }, []);
  return <div>PostsList: {postsState.posts.length}</div>;
};

export default PostsList;
