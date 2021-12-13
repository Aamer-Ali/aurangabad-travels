import React from "react";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
// import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../servies/userService";
import Input from "../common/Input";

function Login() {
  const intilaValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(intilaValues);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  //Handel text change on text fields
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  //Submit EnquiryForm
  const _loginUser = async (e) => {
    e.preventDefault();

    setFormErrors(validateValues(formValues));
    if (Object.entries(formErrors).length === 0) {
      const { data } = await loginUser(formValues);
      if (data.data !== null) {
        // console.log(data.data);
        localStorage.setItem("user_token", data.data);
        // navigate("/");
        window.location = "/";
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    }
  };

  useEffect(() => {
    let mounted = true;
    return () => (mounted = false);
  }, []);

  //Field Validation Before Submitting Form
  const validateValues = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Please enter your name";
    }
    if (!values.password) {
      errors.password = "Please enter your password";
    }

    return errors;
  };

  return (
    <div>
      <div className="row justify-content-center ">
        <div className="col-md-4 col-sm-4 col-xlg-4 col-12 card p-4 mt-3">
          <div className="display-6 mb-2">Login</div>
          {/* <form onSubmit={handleSubmit(submitRegisterationForm)}> */}
          <form>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="form-control "
              onChange={handleChange}
              errors={formErrors}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control "
              onChange={handleChange}
              errors={formErrors}
            />
            <button className="btn btn-success mt-3" onClick={_loginUser}>
              Login
            </button>
            {loginError === true ? (
              <p className="text-center mt-3 text-danger ">
                Incorrect username or password
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
