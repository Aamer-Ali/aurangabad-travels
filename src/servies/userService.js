import http from "./httpServices";
import jwtDecode from "jwt-decode";

const apiEndpont = "http://localhost:3000/api/users";
const tokenKey = "user_token";

export function loginUser(body) {
  const loginDataBody = {
    username: body.username,
    password: body.password,
  };
  //   console.log(body);
  return http.post(apiEndpont + "/login_user", loginDataBody);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("user_token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  loginUser,

  getCurrentUser,
  getToken,
};
