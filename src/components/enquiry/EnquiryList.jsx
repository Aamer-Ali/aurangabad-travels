import React, { useEffect, useState } from "react";
import {
  getEnquiryList,
  getEnquiryListForCustomer,
} from "../../servies/enquiryService";
import jwtDecode from "jwt-decode";

function EnquiryList() {
  const [enqList, setEnqList] = useState([]);
  const [savedUser, setSavedUser] = useState();

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
    // console.log("---->", role_id, customer_id);
    let response;
    if (role_id === 0) {
      response = await getEnquiryListForCustomer(10);
    } else {
      response = await getEnquiryList();
    }
    setEnqList(response.data.data);
  };

  return (
    <div>
      <div>Enquiry list</div>
      {enqList.length === 0 ? null : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">From Location</th>
              <th scope="col">To Location</th>
              <th scope="col">Travelling Date</th>
              <th scope="col">Enquiry Date</th>
            </tr>
          </thead>
          <tbody>
            {enqList.map((enquiry, index) => (
              <tr key={enquiry.enquiry_id}>
                <th scope="row">{index + 1}</th>
                <td>{enquiry.customer_name}</td>
                <td>{enquiry.from_place_name}</td>
                <td>{enquiry.to_place_name}</td>
                <td>{enquiry.date_of_travelling}</td>
                <td>{enquiry.date_of_enquiry}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      console.log(enquiry.enquiry_id);
                    }}
                  >
                    Go
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger"> Cancle </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EnquiryList;

// "customer_id": 10,
// "customer_name": "Aamer",
// "customer_email": "aamer@gmail.com",
// "customer_mobile": "9028030984",
// "customer_address": "Kat Kat Gate",
// "number_of_seats": 12,
// "from_place_id": 1,
// "from_place_name": "Aurangabd",
// "to_place_id": 2,
// "to_place_name": "Bombay",
// "mode_of_transport": 1,
// "mode_name": "Car",
// "date_of_enquiry": "2021-12-10T11:45:34.000Z",
// "date_of_travelling": "2021-12-10T11:45:34.000Z"
