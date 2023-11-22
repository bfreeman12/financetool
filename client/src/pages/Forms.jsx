import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Forms = () => {
  let { state } = useLocation();
  const data = [...state?.data];
  const [filledData, setFilledData] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    data.shift();
    if (data.length === 0) {
      alert("no more forms");
      data = [];
    }
  };
  return (
    <>
      <Navbar />
      <div className="form-body">
        <button onClick={(e) => handleClick(e)}>next form</button>
      </div>
      <Footer />
    </>
  );
};

export default Forms;
