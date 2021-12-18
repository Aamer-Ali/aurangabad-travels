import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState("initials");

  const update = (product) => {
    // setCartItem([...cartItem, product]);
    // console.log(cartItem);
  };

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
