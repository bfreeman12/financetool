import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";

//need to  fetch name dod and date from userprofile before exporting
const Pg1LegalResidence = () => {
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          legalResidence,
          mailingAddress,
          setLegalResidence,
          setMailingAddress,
        } = value.legalResidenceFields;

        return (
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formLegalResidence">
                <Form.Label>Legal Reidence / Domicile</Form.Label>
                <Form.Control
                  value={legalResidence}
                  type="Text"
                  placeholder="(City or county and State)"
                  onChange={(e) => setLegalResidence(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formMailingAddress">
                <Form.Label>Mailing Address</Form.Label>
                <Form.Control
                  value={mailingAddress}
                  type="text"
                  placeholder="Mailing Address including Zip Code"
                  onChange={(e) => setMailingAddress(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg1LegalResidence;
