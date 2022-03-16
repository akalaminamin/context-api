import React from "react";
import { PostsProvider, UsersProvider } from "./provider";
const Providers = ({ children }) => {
  return (
    <>
      <UsersProvider>
        <PostsProvider>{children}</PostsProvider>
      </UsersProvider>
    </>
  );
};

export default Providers;
