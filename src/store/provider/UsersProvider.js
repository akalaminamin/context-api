import { useReducer } from "react";
import { usersContext } from "../contexts";
import { usersReducer } from "../reducers";

const UsersProvider = ({children}) => {
  const [state, dispatch] = useReducer(usersReducer, {
    users: [],
    loader: false,
    error: "",
  });
  return (
    <usersContext.Provider value={{ state, dispatch }}>
      {children}
    </usersContext.Provider>
  );
};

export default UsersProvider;
