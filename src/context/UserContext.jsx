import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState("initials");

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
