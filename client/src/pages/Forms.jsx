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
  const [profileData, setProfileData] = useState({}); // user profile data

  return (
    <>
      <Navbar />
      <Queue data={data} />
      <Form profile={setProfileData} queue={data} />
      {/* using state as a callback for user data */}
      <Footer />
    </>
  );
};

export default Forms;

// const userProfile = {
//   "Full Name": "",
//   "Official Email": "",
//   "Duty Title": "",
//   SSN: "",
//   "Date Of Birth": "",
//   Address: "",
//   City: "",
//   State: "",
//   Country: "",
//   "Zip Code": "",
//   "Cell Phone": "",
//   DSN: "",
//   "Supervisor Name": "",
//   "Supervisor Email": "",
//   "Supervisor Phone": "",
//   Date: "",
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