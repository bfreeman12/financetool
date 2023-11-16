import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function PostalCode() {
  return (
    <Form.Group as={Col} md="3" controlId="validationCustom05">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="text" placeholder="Postal Code" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid Postal Code.
      </Form.Control.Feedback>
    </Form.Group>
  );
}
export default PostalCode;
