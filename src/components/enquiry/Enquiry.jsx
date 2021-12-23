import React from "react";
import TextArea from "../common/TextArea";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Input from "../common/Input";
import { sendEnquiryForm } from "../../servies/enquiryService";
import jwtDecode from "jwt-decode";
import // trains,
// placeFromArray,
// placeToArray,
// transposrtMode,
"../../servies/DummyData";
import { Card, Col, Form, Row, Button, FloatingLabel } from "react-bootstrap";
import { getCurrentUser } from "../../servies/userService";
import { getPlaceList } from "../../servies/placesService";
import { getModeOfTransport } from "../../servies/modeOfTransportService";

function Enquiry(props) {
  //Data Initializations
  const intilaValues = {
    user_id: 0,
    // username: "",
    // email: "",
    // mobile: "",
    // address: "",
    numberOfSeats: 0,
    modeOfTransport: 0,
    // train: "",
    // trainId: 0,
    locationTo: "",
    // locationToId: 0,
    locationFrom: "",
    // locationFromId: 0,
    // date: new Date(2021, 11, 15),
    date: new Date(),
  };
  const [formValues, setFormValues] = useState(intilaValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [showTrainDD, setShowTrainDD] = useState(false);
  const [userFromToken, setUserFromToken] = useState({});
  const [places, setPlaces] = useState([]);
  const [transposrtMode, setTransposrtMode] = useState([]);
  const currenDate = new Date();

  // UseEffect to get uesr data from token
  useEffect(() => {
    const getPlaces = async () => {
      const response = await getPlaceList();
      setPlaces(response.data.data);
    };

    const getModesOfTransport = async () => {
      const response = await getModeOfTransport();
      setTransposrtMode(response.data.data);
    };

    try {
      setUserFromToken(getCurrentUser());
      getPlaces();
      getModesOfTransport();
    } catch (excp) {}
  }, []);

  // UseEffect Hook for submitting data to server if there is no error after validation
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendDataToServer();
    }
  }, [formErrors]);

  //Handel text change on text fields
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  //Make select mode of transport
  const setModeOfTransport = (event) => {
    // console.log(event.target.value);

    formValues.modeOfTransport = event.target.value;
    // if (event.target.value === "Train") {
    //   setShowTrainDD(true);
    // } else {
    //   setShowTrainDD(false);
    // }
  };

  //Submit EnquiryForm
  const booTicket = async (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, ["user_id"]: userFromToken.user_id });
    setFormErrors(validateValues(formValues));
    setIsSubmit(true);
  };

  //send Data to server
  const sendDataToServer = async () => {
    const response = await sendEnquiryForm(formValues);
    if (response.data.status === true) {
      // alert("Enquiry Submit");
      window.location = "/ticket-enquiry-list";
    }
  };

  //Field Validation Before Submitting Form
  const validateValues = (values) => {
    const errors = {};
    // const regExForEmail =
    // /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // if (!values.username) {
    //   errors.username = "Please enter your name";
    // }
    // if (!values.email) {
    //   errors.email = "Email is required";
    // }
    // if (!values.mobile) {
    //   errors.mobile = "Mobile is required";
    // } else if (values.mobile.length < 2 || values.mobile.length > 10) {
    //   errors.mobile = "Please enter proper mobile number";
    // }
    // if (!values.address) {
    //   errors.address = "Address is required";
    // }
    if (values.numberOfSeats < 1) {
      errors.numberOfSeats = "Please enter number of seats required";
    }
    if (values.modeOfTransport < 1) {
      errors.modeOfTransport = "Please select mode of transport";
    }
    // if (!values.train) {
    //   errors.train = "Please select train";
    // } else if (values.train.value < 1) {
    //   errors.train = "Please select proper train";
    // }
    if (!values.locationFrom) {
      errors.locationFrom = "Please select from where to go";
    }
    if (!values.locationTo) {
      errors.locationTo = "Please select the destination";
    }

    if (values.date < currenDate.setHours(0, 0, 0, 0)) {
      errors.date = "Please select the valid date";
    }
    return errors;
  };

  //retrun Method
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6 col-xlg-6 col-12 card mt-3 mb-3">
          <div className="display-6" style={{ fontSize: "22px" }}>
            Hi, Welcome to the Aurangabad Travels.
          </div>

          <div className="display-6" style={{ fontSize: "15px" }}>
            Please Fill thew Form
          </div>

          <Form className="justify-content-start">
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              className="form-control "
              value={userFromToken.first_name + " " + userFromToken.last_name}
              disabled={true}
              onChange={handleChange}
              errors={formErrors}
            />
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control "
              value={userFromToken.user_email}
              disabled={true}
              onChange={handleChange}
              errors={formErrors}
            />
            <Input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              className="form-control "
              value={userFromToken.user_mobile}
              disabled={true}
              onChange={handleChange}
              errors={formErrors}
            />

            <FloatingLabel label="Address">
              <Form.Control
                as="textarea"
                name="address"
                id="address"
                placeholder="Address"
                value={userFromToken.user_address}
                readOnly
                style={{ height: "150px" }}
              />
            </FloatingLabel>
            <p className="errors text-start">{formErrors["address"]}</p>

            {/* <TextArea
              name="address"
              id="address"
              style={{ width: "100%" }}
              rows="5"
              placeholder="Address"
              errors={formErrors}
              onChange={handleChange}
            /> */}

            <Input
              type="number"
              name="numberOfSeats"
              id="numberOfSeats"
              placeholder="Number of Seats"
              min="1"
              errors={formErrors}
              onChange={handleChange}
            />

            <div onChange={setModeOfTransport} className="row">
              {transposrtMode.map((t) => {
                return (
                  <div
                    key={t.mode_id}
                    className="col-md-3 col-sm-3 col-xlg-3 col-xs-3 justify-content-start"
                  >
                    <input
                      type="radio"
                      value={t.mode_id}
                      name="transportType"
                      className="me-1"
                    />
                    {t.mode_name}
                  </div>
                );
              })}
            </div>
            <p className="errors text-start">{formErrors["modeOfTransport"]}</p>

            {/* {showTrainDD === true ? (
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
            ) : null} 
            <p className="errors text-start">{formErrors["train"]}</p> */}

            <div className="row">
              <div className="col-md-6 col-sm-6 col-xlg-6 col-12">
                <select
                  name="locationFrom"
                  id="locationFrom"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      ["locationFrom"]: places[e.currentTarget.place_id],
                    });
                  }}
                  className="form-control form-select"
                >
                  {!places
                    ? null
                    : places.map((from, index) => (
                        <option key={from.value} value={from.place_id}>
                          {from.place_name}
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
                      ["locationTo"]: places[e.currentTarget.place_id],
                    });
                  }}
                  className="cform-control form-select"
                >
                  {!places
                    ? null
                    : places.map((to, index) => (
                        <option key={to.value} value={to.place_id}>
                          {to.place_name}
                        </option>
                      ))}
                </select>
                <p className="errors text-start">{formErrors["locationTo"]}</p>
              </div>
            </div>

            {/* <input type="calendar" /> */}

            <Calendar
              onChange={(value) => {
                var date = "12/12/2021";
                // var d = new Date(date);
                // console.log("CHANGED ---- >", value.toString());
                setFormValues({
                  ...formValues,
                  ["date"]: value,
                });
              }}
              value={formValues.date}
              className="form-control"
            />
            <p className="errors text-start">{formErrors["date"]}</p>

            <button className="btn btn-success mt-3" onClick={booTicket}>
              Enquiry For Ticket
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
