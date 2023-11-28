import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import MilitaryGradeSelector from "./MilitaryGradeSelector";
import DutyLocationSelector from "./DutyLocationSelector";
import AddressComponent from "./AddressComponent";
import DoDIDComponent from "./DodIDComponent";

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
      <DoDIDComponent placeholder="Enter your DoD ID" />

      <MilitaryGradeSelector />
      <DutyLocationSelector />
      <AddressComponent label="Phyiscal Address" />
    </div>
  );
}
export default MemberInformationComponent;
