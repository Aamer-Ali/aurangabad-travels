import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import UserRegsitration from "./components/registration/UserRegsitration";
import Navbar from "./components/common/Navbar";
import Enquiry from "./components/enquiry/Enquiry";
import ContactUs from "./components/contact-us/ContactUs";
import MakeTicketBooking from "./components/make-ticket-booking/MakeTicketBooking";
import Transactions from "./components/transactions.jsx/Transactions";
import Login from "./components/login/Login";
import OurPackages from "./components/our-packages/OurPackages";

function App() {
  return (
    <div className="App fill-window ">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/our-packages-page" element={<OurPackages />} />
          <Route path="/ticket-enquiry-page" element={<Enquiry />} />
          <Route path="/contact-us-page" element={<ContactUs />} />
          <Route path="/make-booking-page" element={<MakeTicketBooking />} />
          <Route path="/transactions-page" element={<Transactions />} />
          <Route
            path="/user-registration-page"
            element={<UserRegsitration />}
          />
          <Route path="/login-page" element={<Login />} />
          <Route path="/logout-page" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
