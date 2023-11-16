import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import MilitaryGradeSelector from "./MilitaryGradeSelector";
import DutyLocationSelector from "./DutyLocationSelector";
import AddressComponent from "./AddressComponent";

function MemberInformationComponent() {
  return (
    <div>
      <h3 className="mb-4">Member Information</h3>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          autoComplete="given-name"
          type="text"
          placeholder="Enter your first name"
          required
        />
        <Form.Control.Feedback type="invalid">
          First Name is required.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          autoComplete="family-name"
          type="text"
          placeholder="Enter your last name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="dodID">
        <Form.Label>DoD ID Number</Form.Label>
        <Form.Control type="number" placeholder="Enter your DoD ID" />
      </Form.Group>

      <MilitaryGradeSelector />
      <DutyLocationSelector />
      <AddressComponent label="Phyiscal Address" />
    </div>
  );
}
export default MemberInformationComponent;
