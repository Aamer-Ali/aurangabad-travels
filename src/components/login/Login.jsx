import React from "react";
import { useState, useEffect, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import UserContext from "../../context/UserContext";
import { loginUser } from "../../servies/userService";
import Input from "../common/Input";

function Login() {
  const intilaValues = {
    username: "",
    password: "",
    userType: 0, // 2 For Customer .. 1 for Employee
  };
  const [formValues, setFormValues] = useState(intilaValues);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState(false);
  const [loggedUser, setLoggedUser] = useContext(UserContext);

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
        localStorage.setItem("user_token", data.data);
        setLoggedUser("Hello World");
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
    if (values.userType === 0) {
      errors.userType = "Please select user type";
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
            <div className="row mb-3">
              <div className="col">
                <input
                  onClick={(e) => {
                    formValues.userType = 1;
                  }}
                  className="form-check-input"
                  type="radio"
                  name="radioUserSelection"
                  id="rdbtnEmployee"
                />
                <label className="form-check-label" htmlFor="rdbtnEmployee">
                  Employee
                </label>
              </div>
              <div className="col">
                <input
                  onClick={(e) => {
                    formValues.userType = 2;
                  }}
                  className="form-check-input"
                  type="radio"
                  name="radioUserSelection"
                  id="rdbtnCustomer"
                />
                <label className="form-check-label" htmlFor="rdbtnCustomer">
                  Customer
                </label>
              </div>
            </div>
            <p className="errors text-start">{formErrors["userType"]}</p>

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
