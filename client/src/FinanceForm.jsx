import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import { Form, Row, Col } from "react-bootstrap";
import MarriageStatusComponent from "./MartialStatusComponent";
import MemberInformationComponent from "./MemberInformation";

function FinanceForm() {
  return (
    <div className="d-flex justify-content-center">
      <div className="container p-3 my-3 border" style={{ maxWidth: "600px" }}>
        <Form>
          <MemberInformationComponent />

          <MarriageStatusComponent />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FinanceForm;
