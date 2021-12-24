import jwtDecode from "jwt-decode";
import React from "react";
import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  try {
    const jwt = localStorage.getItem("user_token");
    const user = jwtDecode(jwt);
    return user ? true : false;
  } catch (excp) {}
};

function ProtectedRoute() {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
