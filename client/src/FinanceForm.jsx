import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import PrivacyBanner from "./PrivacyBanner";
import { Form, Row, Col } from "react-bootstrap";
import MarriageStatusComponent from "./MartialStatusComponent";
import MemberInformationComponent from "./MemberInformation";
import CustodialParentComponent from "./CustodialParentComponent";
import { fillPdfTemplate, downloadPdf } from "./ProcessPDF";
import MemberCertificationComponent from "./MemberCertificationComponent";
function FinanceForm() {
  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    const formData = {
      name: event.target.elements.firstName.value,
      // other fields
    };
    console.log(formData);
    try {
      const pdfBytes = await fillPdfTemplate(formData);
      console.log(pdfBytes);
      downloadPdf(pdfBytes, "filled_form.pdf");
    } catch (error) {
      console.error("Error filling PDF", error);
    }
  };
  return (
    <div>
      <PrivacyBanner />
      <div className="d-flex justify-content-center">
        <div
          className="container p-3 my-3 border"
          style={{ maxWidth: "600px" }}
        >
          <Form onSubmit={handleSubmit}>
            <MemberInformationComponent />

            <MarriageStatusComponent />
            <CustodialParentComponent />
            <MemberCertificationComponent />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FinanceForm;
