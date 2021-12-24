import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navbar1({ user }) {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Aurangabd Travels</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-start">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/our-packages-page">Our Packages</Nav.Link>
            {user && user.role_id !== 1 && (
              <Nav.Link href="/ticket-enquiry-page">Enquiry</Nav.Link>
            )}
            {user && (
              <Nav.Link href="/ticket-enquiry-list">Enquiry List</Nav.Link>
            )}
            <Nav.Link href="/contact-us-page">Constact Us</Nav.Link>
            {user && user.role_id === 1 && (
              <React.Fragment>
                <Nav.Link href="/transactions-page">Transactions</Nav.Link>
                <Nav.Link href="/user-registration-page">New Employee</Nav.Link>
                <NavDropdown title="Masters" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/branch-master">
                    Branch Master
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/place-master">
                    Place Master
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mode-of-transport-master">
                    Mode of Transport Master 
                  </NavDropdown.Item>
                </NavDropdown>
              </React.Fragment>
            )}
          </Nav>
          <div className="d-flex">
            {!user && (
              <Nav.Link
                className="btn btn-success"
                style={{ color: "white" }}
                href="/login-page"
              >
                Login
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                className="btn btn-danger"
                style={{ color: "white" }}
                href="/logout-page"
              >
                Logout
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   // <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-back-color">  fixed-top
  //   <nav className="navbar navbar-expand-lg sticky-top navbar-dark  nav-bar-back-color">
  //     <Link className="ms-5 navbar-brand" to="/">
  //       Sample App For Test
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNav"
  //       aria-controls="navb arNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //       onClick={onToggleButtonClick}
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     {/* <div className="collapse navbar-collapse show" id="navbarNav"> */}
  //     <div className={menuExpand} id="navbarNav">
  //       {/* <div className={menuExpand} id="navbarNav"> */}
  //       <ul className="navbar-nav text-start">
  //         <li className="nav-item active">
  //           <Link className="nav-link" to="/">
  //             Home
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/our-packages-page">
  //             Our Packages
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/ticket-enquiry-page">
  //             Enquiry
  //           </Link>
  //         </li>
  //         {user && (
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/ticket-enquiry-list">
  //               Enquiry List
  //             </Link>
  //           </li>
  //         )}

  //         <li className="nav-item">
  //           <Link className="nav-link " to="/contact-us-page">
  //             Constact Us
  //           </Link>
  //         </li>

  //         {user && user.role_id !== 0 && (
  //           <React.Fragment>
  //             <li className="nav-item">
  //               <Link className="nav-link " to="/make-booking-page">
  //                 Make Booking
  //               </Link>
  //             </li>
  //             {user && user.role_id === 1 && (
  //               <li className="nav-item">
  //                 <Link className="nav-link " to="/transactions-page">
  //                   Transactions
  //                 </Link>
  //               </li>
  //             )}
  //             <li className="nav-item">
  //               <Link className="nav-link " to="/user-registration-page">
  //                 User Registration
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Dropdown>
  //                 <Dropdown.Toggle id="dropdown-basic">
  //                   Dropdown Button
  //                 </Dropdown.Toggle>

  //                 <Dropdown.Menu>
  //                   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  //                   <Dropdown.Item href="#/action-2">
  //                     Another action
  //                   </Dropdown.Item>
  //                   <Dropdown.Item href="#/action-3">
  //                     Something else
  //                   </Dropdown.Item>
  //                 </Dropdown.Menu>
  //               </Dropdown>
  //             </li>
  //           </React.Fragment>
  //         )}
  //       </ul>

  //       <div className="ms-auto me-5">
  //         <ul className="navbar-nav ">
  //           {!user && (
  //             <li className="nav-item">
  //               <Link className="nav-link " to="/login-page">
  //                 Login
  //               </Link>
  //             </li>
  //           )}
  //           {user && (
  //             <li className="nav-item">
  //               <Link className="nav-link " to="/logout-page">
  //                 Logout
  //               </Link>
  //             </li>
  //           )}
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
}

export default Navbar1;
