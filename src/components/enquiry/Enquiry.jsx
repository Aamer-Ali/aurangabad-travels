import React from "react";
import TextArea from "../common/TextArea";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Input from "../common/Input";

import { trains, placeFromArray, placeToArray } from "../../servies/DummyData";

function Enquiry(props) {
  const intilaValues = {
    username: "",
    email: "",
    mobile: "",
    address: "",
    numberOfSeats: 0,
    train: "",
    // trainId: 0,
    locationTo: "",
    // locationToId: 0,
    locationFrom: "",
    // locationFromId: 0,
    date: new Date(),
  };
  const [formValues, setFormValues] = useState(intilaValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [address, setAddress] = useState("");
  // const [train, setTrain] = useState("");
  // const [to, setTo] = useState("");
  // const [from, setFrom] = useState("");
  // const [date, onDateChange] = useState(new Date());

  const booTicket = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formValues));

    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validateValues = (values) => {
    const errors = {};
    // const regExForEmail =
    // /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.username) {
      errors.username = "Please enter your name";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile is required";
    }
    // else if (values.mobile.length < 0 && values.mobile.length > 10) {
    //   errors.mobile = "Please enter proper mobile number";
    // }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (values.numberOfSeats < 1) {
      errors.numberOfSeats = "Please enter number of seats required";
    }
    if (!values.train) {
      errors.train = "Please select train";
    } else if (values.train.value < 1) {
      errors.train = "Please select proper train";
    }
    if (!values.locationFrom) {
      errors.locationFrom = "Please select from where to go";
    }
    if (!values.locationTo) {
      errors.locationTo = "Please select the destination";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6 col-xlg-6 col-12 card mt-3 mb-3">
          <div className="display-6 ">
            Hi, Welcome to the Aurangabad Travels..
          </div>

          <div className="">Please Fill thew Form</div>

          <form className="justify-content-start">
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              className="form-control "
              onChange={handleChange}
              errors={formErrors}
            />

            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control "
              onChange={handleChange}
              errors={formErrors}
            />

            <Input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              className="form-control "
              onChange={handleChange}
              errors={formErrors}
            />

            <TextArea
              name="address"
              id="address"
              style={{ width: "100%" }}
              rows="5"
              placeholder="Address"
              errors={formErrors}
              onChange={handleChange}
            />

            <Input
              type="number"
              name="numberOfSeats"
              id="numberOfSeats"
              placeholder="Number of Seats"
              min="1"
              errors={formErrors}
              onChange={handleChange}
            />

            <select
              name="train"
              id="train"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["train"]: trains[e.currentTarget.value],
                });
              }}
              className="cform-control form-select "
            >
              {!trains
                ? null
                : trains.map((train, index) => (
                    <option key={train.value} value={train.value}>
                      {train.name}
                    </option>
                  ))}
            </select>
            <p className="errors text-start">{formErrors["train"]}</p>

            <div className="row">
              <div className="col-md-6 col-sm-6 col-xlg-6 col-12">
                <select
                  name="locationFrom"
                  id="locationFrom"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      ["locationFrom"]: placeFromArray[e.currentTarget.value],
                    });
                  }}
                  className="form-control form-select"
                >
                  {!placeFromArray
                    ? null
                    : placeFromArray.map((from, index) => (
                        <option key={from.value} value={from.value}>
                          {from.name}
                        </option>
                      ))}
                </select>
                <p className="errors text-start">
                  {formErrors["locationFrom"]}
                </p>
              </div>

              <div className="col-md-6 col-sm-6 col-xlg-6 col-12">
                <select
                  name="locationTo"
                  id="locationTo"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      ["locationTo"]: placeToArray[e.currentTarget.value],
                    });
                  }}
                  className="cform-control form-select"
                >
                  {!placeToArray
                    ? null
                    : placeToArray.map((to, index) => (
                        <option key={to.value} value={to.value}>
                          {to.name}
                        </option>
                      ))}
                </select>
                <p className="errors text-start">{formErrors["locationTo"]}</p>
              </div>
            </div>

            <Calendar
              onChange={(e) => {
                // const date = e.getDate();
                // const month = e.getMonth();
                // const year = e.getFullYear();

                setFormValues({
                  ...formValues,
                  ["date"]: e,
                });
              }}
              value={formValues.date}
              className="form-control"
            />

            <button className="btn btn-success mt-3" onClick={booTicket}>
              Enquiry For Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
