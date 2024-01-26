import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg2PayAdvance = () => {
  const { advancePayFields } = useContext(FormContext);
  return (
    <>
      <h5>Lost Reciept</h5>
      <Form></Form>
    </>
  );
};

export default Pg2PayAdvance;
