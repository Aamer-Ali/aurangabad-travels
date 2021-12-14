import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const hs = useNavigate();
  let loc = useLocation();

  const showHistory = () => {
    // console.log("History");
    // console.log(hs);

    console.log(loc);
  };

  return (
    <div>
      <div>Home Page</div>
    </div>
  );
}

export default Home;
