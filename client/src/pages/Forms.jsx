import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import "../styles/forms.css";
import Form from "../components/Form";
import Queue from "../components/Queue";

const Forms = () => {
  let { state } = useLocation();
  const [data, setData] = useState(state.data); // all pdfs that are in the queue
  return (
    <>
      <Navbar />
      <Queue data={data} />
      <Form queue={data} />
      <Footer />
    </>
  );
};

export default Forms;

// const userProfile = {
//   "Full Name": "", x
//   "Official Email": "", x
//   "Duty Title": "", x
//   SSN: "", x
//   "Date Of Birth": "",
//   Address: "", x
//   City: "", x
//   State: "", x
//   Country: "", x
//   "Zip Code": "", x
//   "Cell Phone": "", x
//   DSN: "", x
//   "Supervisor Name": "",x
//   "Supervisor Email": "",x
//   "Supervisor Phone": "",x
//   Date: "", x
// };

// const payrollFields = {
//   "Account Type": "",
//   "Payment Type": "",
//   "Routing Number": "",
//   "Account Number": "",
//   "Check Digit": "",
//   "Bank Name": "",
//   "Allotment Type": "",
//   "Allotment Account Type": "",
//   "Allotment Decrease": "",
//   "Allotment Increase": "",
//   "Allotment New Total": "",
//   "Allotment Amount": "",
//   "Allotee Name": "",
//   "Allotee Routing Number": "",
//   "Allotee Account Number": "",
//   "Allotee Check Digit": "",
//   "Allotee Bank Name": "",
// };
