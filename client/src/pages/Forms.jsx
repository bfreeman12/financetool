import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
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
    </>
  );
};

export default Forms;
