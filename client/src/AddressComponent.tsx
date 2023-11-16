import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CountrySelector from "./CountrySelector";

function AddressComponent({ label }) {
  return (
    <div>
      <h4 className="mb-4">{label}</h4>
      <Form.Group className="mb-3" controlId="street">
        <Form.Label>Address 1</Form.Label>
        <Form.Control
          autoComplete="address-line1"
          type="text"
          placeholder="Enter your address"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="street">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          autoComplete="address-line2"
          type="text"
          placeholder="Enter your address"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="street">
        <Form.Label>City</Form.Label>
        <Form.Control
          autoComplete="address-level2"
          type="text"
          placeholder="Enter your city"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="street">
        <Form.Label>State/Province/Region</Form.Label>
        <Form.Control
          autoComplete="address-level1"
          type="text"
          placeholder="Enter your State/Province/Region"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="street">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          autoComplete="postal-code"
          type="text"
          placeholder="Enter your postal code"
        />
      </Form.Group>
      <CountrySelector />
    </div>
  );
}

export default AddressComponent;
