import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar1({ user }) {
  const [menuExpand, setMenuExpande] = useState(
    "collapse navbar-collapse text-start"
  );
  const onToggleButtonClick = () => {
    if (menuExpand.includes("show")) {
      setMenuExpande("collapse navbar-collapse text-start");
      console.log(menuExpand);
    } else {
      setMenuExpande("collapse navbar-collapse text-start ms-5 show");
      console.log(menuExpand);
    }
  };

  console.log(user);

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-back-color">  fixed-top
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark  nav-bar-back-color">
      <Link className="ms-5 navbar-brand" to="/">
        Sample App For Test
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navb arNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={onToggleButtonClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse show" id="navbarNav"> */}
      <div className={menuExpand} id="navbarNav">
        {/* <div className={menuExpand} id="navbarNav"> */}
        <ul className="navbar-nav text-start">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/our-packages-page">
              Our Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ticket-enquiry-page">
              Enquiry
            </Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/ticket-enquiry-list">
                Enquiry List
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link className="nav-link " to="/contact-us-page">
              Constact Us
            </Link>
          </li>

          {user && (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link " to="/make-booking-page">
                  Make Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/transactions-page">
                  Transactions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/user-registration-page">
                  User Registration
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>

        <div className="ms-auto me-5">
          <ul className="navbar-nav ">
            {!user && (
              <li className="nav-item">
                <Link className="nav-link " to="/login-page">
                  Login
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <Link className="nav-link " to="/logout-page">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
