import React, { useEffect, useState } from "react";
import { getEnquiryList } from "../../servies/enquiryService";

function EnquiryList() {
  const [enqList, setEnqList] = useState([]);

  useEffect(() => {
    async function getEnquiry() {
      const response = await getEnquiryList();
      setEnqList(response.data);
      console.log(response.data);
    }
    getEnquiry();
  }, []);

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
                    class="btn btn-success"
                    onClick={(e) => {
                      console.log(enquiry.enquiry_id);
                    }}
                  >
                    Go
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger"> Cancle </button>
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
