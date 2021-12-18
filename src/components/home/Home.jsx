import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Home() {
  const hs = useNavigate();
  let loc = useLocation();

  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const showHistory = () => {
    // console.log("History");
    // console.log(hs);

    console.log(loc);
  };

  console.log("===>", loggedUser);

  return (
    <div>
      <div>{loggedUser && <h1>{loggedUser}</h1>}</div>
      <div>Home Page</div>
    </div>
  );
}

export default Home;
