import React from "react";
import { Form } from "react-bootstrap";

function DoDIDComponent({ placeholder }) {
  const handleInputChange = (e) => {
    // Ensure the value is a string and replace any non-digit characters
    const value = String(e.target.value).replace(/[^0-9]/g, "");
    e.target.value = value;
  };

  return (
    <Form.Group className="mb-3" controlId="DoDID">
      <Form.Label>DoD ID</Form.Label>
      <Form.Control
        type="text"
        maxLength={10}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </Form.Group>
  );
}

export default DoDIDComponent;
