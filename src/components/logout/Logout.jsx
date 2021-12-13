import React, { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("user_token");
    window.location = "/";
  });

  return <div></div>;
}

export default Logout;
