import React, { useContext, useEffect } from "react";
import { usersContext } from "../../store/contexts";
import { getUser } from "../../store/actions/usersAction";
const UserList = () => {
  const { state, dispatch } = useContext(usersContext);
  useEffect(async () => {
    getUser({ dispatch });
  }, []);
  return <div>UserList: {state.users.length}</div>;
};

export default UserList;
