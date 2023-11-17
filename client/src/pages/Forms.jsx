import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Forms = () => {
  let { state } = useLocation();

  return (
    <>
      <Navbar />
      {state?.data?.length === 0 || !state?.data ? (
        <p style={{ color: "white" }}>No data found</p>
      ) : (
        <h1 style={{ color: "white" }}>{state?.data}</h1>
      )}
      <Footer />
    </>
  );
};

export default Forms;
