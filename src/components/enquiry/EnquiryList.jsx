import React, { useEffect, useState } from "react";
import {
  getEnquiryList,
  getEnquiryListForCustomer,
} from "../../servies/enquiryService";
import jwtDecode from "jwt-decode";
import { Badge } from "react-bootstrap";

function EnquiryList() {
  const [enqList, setEnqList] = useState([]);
  const [savedUser, setSavedUser] = useState();
  const [roleId, setRoleId] = useState();

  useEffect(() => {
    // async function getEnquiry() {
    try {
      const jwt = localStorage.getItem("user_token");
      const userFromToken = jwtDecode(jwt);
      setSavedUser(userFromToken);
      getEnquiry(
        userFromToken["role_id"],
        userFromToken["role_id"] === 0 ? userFromToken["customer_id"] : null
      );
    } catch (excp) {}
    //   let response;
    //   // if (savedUser["role_id"] === 0) {
    //   // response = await getEnquiryListForCustomer(savedUser["customer_id"]);
    //   // } else {
    //   response = await getEnquiryList();
    //   // }
    //   setEnqList(response.data);
    //   // console.log(response.data);
    // }
  }, []);

  const getEnquiry = async (role_id, customer_id) => {
    setRoleId(role_id);
    // console.log("---->", role_id, customer_id);
    let response;
    if (role_id === 0) {
      response = await getEnquiryListForCustomer(1);
    } else {
      response = await getEnquiryList();
    }
    setEnqList(response.data.data);
  };

  return (
    <div>
      {enqList.length === 0 ? null : (
        <table className="table table-hover text-start">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">From Location</th>
              <th scope="col">To Location</th>
              <th scope="col">Travelling Date</th>
              <th scope="col">Enquiry Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {enqList.map((enquiry, index) => (
              <tr key={enquiry.enquiry_id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {enquiry.customer_first_name +
                    " " +
                    enquiry.customer_last_name}
                </td>
                <td>{enquiry.from_place_name}</td>
                <td>{enquiry.to_place_name}</td>
                <td>{enquiry.date_of_travelling}</td>
                <td>{enquiry.date_of_enquiry}</td>
                <td>
                  {enquiry.status === 0 && <Badge bg="warning">Pending</Badge>}
                  {enquiry.status === 1 && (
                    <Badge bg="success">Completed</Badge>
                  )}
                  {enquiry.status === 2 && <Badge bg="danger">Cancled</Badge>}
                </td>
                {roleId !== 0 && (
                  <td>
                    {enquiry.status === 0 ? (
                      <button
                        className="btn btn-success"
                        onClick={(e) => {
                          console.log(enquiry.enquiry_id);
                        }}
                      >
                        Go
                      </button>
                    ) : null}
                  </td>
                )}
                {roleId !== 0 && (
                  <td>
                    {enquiry.status === 0 ? (
                      <button className="btn btn-danger"> Cancle </button>
                    ) : null}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EnquiryList;
