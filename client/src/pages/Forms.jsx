import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import "../styles/forms.css";
const Forms = () => {
  let { state } = useLocation();
  const [data, setData] = useState([...state?.data]);
  const [filledData, setFilledData] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    if (data.length === 0) {
      alert("no more forms");
    } else {
      setData(data.slice(1));
    }
  };

  const DisplayData = () => {
    if (data.length === 0) {
      return null;
    }

    return (
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Navbar />
      <div className="form-list">
        <DisplayData />
      </div>
      <div className="form-body">
        {data.length ? (
          <button onClick={(e) => handleClick(e)}>next form</button>
        ) : (
          <label>no more form</label>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Forms;
