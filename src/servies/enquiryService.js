import { date } from "joi";
import http from "./httpServices";

const apiEndpont = "http://localhost:3000/api/enquiry";

export function sendEnquiryForm(body) {
  console.log("SENDING-----> ", body.date);
  const enquiryDataBody = {
    customerName: body.username,
    email: body.email,
    mobile: body.mobile,
    address: body.address,
    numberOfSeats: parseInt(body.numberOfSeats),
    modeOfTransport: parseInt(body.modeOfTransport),
    locationTo: body.locationTo,
    locationFrom: body.locationFrom,
    travelingDate: body.date.toString(),
    enquiryDate: new Date().toString(),
  };
  //   console.log(body);
  return http.post(apiEndpont, enquiryDataBody);
}

export function getEnquiryList() {
  return http.get(apiEndpont + "/list");
}

export function getEnquiryListForCustomer(custoemrId) {
  return http.get(apiEndpont + `/list/${custoemrId}`);
}
