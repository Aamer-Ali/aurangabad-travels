import http from "./httpServices";

const apiEndpont = "http://localhost:3000/api/places";

// export function sendEnquiryForm(body) {
//   const enquiryDataBody = {
//     // customerName: body.username,
//     // email: body.email,
//     // mobile: body.mobile,
//     // address: body.address,
//     user_id: parseInt(body.user_id),
//     numberOfSeats: parseInt(body.numberOfSeats),
//     modeOfTransport: parseInt(body.modeOfTransport),
//     locationTo: body.locationTo,
//     locationFrom: body.locationFrom,
//     travelingDate: body.date.toString(),
//     enquiryDate: new Date().toString(),
//   };
//   console.log(enquiryDataBody);
//   return http.post(apiEndpont, enquiryDataBody);
// }

export function getPlaceList() {
  return http.get(apiEndpont + "/list");
}
