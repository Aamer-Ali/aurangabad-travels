import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.statusCode >= 400 &&
    error.response.statusCode < 5000;
  if (!expectedErrors) {
    console.log("An Unexpected Error Occours");
  } else {
    return Promise.reject(error);
  }
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
