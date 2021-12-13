import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./components/home/Home";
import UserRegsitration from "./components/registration/UserRegsitration";
import Navbar1 from "./components/common/Navbar";
import Enquiry from "./components/enquiry/Enquiry";
import ContactUs from "./components/contact-us/ContactUs";
import MakeTicketBooking from "./components/make-ticket-booking/MakeTicketBooking";
import Transactions from "./components/transactions.jsx/Transactions";
import Login from "./components/login/Login";
import OurPackages from "./components/our-packages/OurPackages";
import EnquiryList from "./components/enquiry/EnquiryList";
import Logout from "./components/logout/Logout";
import ProtectedRoute from "./components/common/ProtectedRoute";


class App extends React.Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("user_token");
      const user = jwtDecode(jwt);
      this.setState({ user });
      console.log("App Js File....", user);
    } catch (excp) {}
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App fill-window ">
        <Navbar1 user={this.state.user} />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/our-packages-page" element={<OurPackages />} />
            <Route path="/ticket-enquiry-page" element={<Enquiry />} />
            <Route
              path="/ticket-enquiry-list"
              element={user ? <EnquiryList /> : <Navigate to="login-page" />}
            />
            <Route path="/contact-us-page" element={<ContactUs />} />
            <Route path="/make-booking-page" element={<MakeTicketBooking />} />
            <Route path="/transactions-page" element={<Transactions />} />
            <Route
              path="/user-registration-page"
              element={<UserRegsitration />}
            />
            <Route path="/login-page" element={<Login />} />
            <Route path="/logout-page" element={<Logout />} />
            <Route path="*" element={<Navigate to="/login-page" />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
