import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Forms = () => {
  let { state } = useLocation();

  return (
    <>
      <Navbar />
      {!state || !state.data || state.data.length === 0 ? (
        <p style={{ color: "white" }}>No data found</p>
      ) : (
        state.data
      )}
      <Footer />
    </>
  );
};

export default Forms;
