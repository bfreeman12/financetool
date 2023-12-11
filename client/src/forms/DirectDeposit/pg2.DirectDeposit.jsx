import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
const Pg2DirectDeposit = () => {
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          allotmentType,
          allotmentAction,
          allotmentAmount,
          allotmentNewTotal,
          allotteeName,
          allotteeRoutingNumber,
          allotteeAccountNumber,
          allotteeCheckDigit,
          allotteeTitle,
          allotteeBankName,
          setAllotmentType,
          setAllotmentAction,
          setAllotmentAmount,
          setAllotmentNewTotal,
          setAllotteeName,
          setAllotteeRoutingNumber,
          setAllotteeAccountNumber,
          setAllotteeCheckDigit,
          setAllotteeTitle,
          setAllotteeBankName,
        } = value.payrollFields;

        const handleAllotteeRoutingNumber = (e) => {
          setAllotteeRoutingNumber(e.target.value);
          if (e.target.value.length === 9) {
            setAllotteeCheckDigit(e.target.value[8]);
          }
        };

        return (
          <>
            <h3 style={{ textDecoration: "underline" }}>Allotments</h3>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="allotmentType">
                <Form.Label>Allotment Type</Form.Label>
                <Form.Check
                  type="radio"
                  name="allotment-type"
                  id="allotment-type-savings"
                  label="Savings (Whole Dollar Amounts Only)"
                  value="Savings"
                  checked={allotmentType === "Savings"}
                  onChange={() => setAllotmentType("Savings")}
                />
                <Form.Check
                  type="radio"
                  name="allotment-type"
                  id="allotment-type-third-party"
                  label="Discretionary or Third Party"
                  value="Discretionary"
                  checked={allotmentType === "Discretionary"}
                  onChange={() => setAllotmentType("Discretionary")}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="allotmentAction">
                <Form.Label>Action</Form.Label>
                <Form.Check
                  type="radio"
                  name="allotment-action"
                  id="allotment-start"
                  label="Start"
                  value="Start"
                  checked={allotmentAction === "Start"}
                  onChange={() => setAllotmentAction("Start")}
                />
                <Form.Check
                  type="radio"
                  name="allotment-action"
                  id="allotment-stop"
                  label="Stop"
                  value="Stop"
                  checked={allotmentAction === "Stop"}
                  onChange={() => setAllotmentAction("Stop")}
                />
                <Form.Check
                  type="radio"
                  name="allotment-action"
                  id="allotment-change"
                  label="Change"
                  value="Change"
                  checked={allotmentAction === "Change"}
                  onChange={() => setAllotmentAction("Change")}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="allotmentAction">
                <Form.Label>Amount</Form.Label>
                <Form.Check
                  type="radio"
                  name="allotment-amount"
                  id="allotment-increase"
                  label="Increase To"
                  value="Increase"
                  checked={allotmentAmount === "Increase"}
                  onChange={() => setAllotmentAmount("Increase")}
                />
                <Form.Check
                  type="radio"
                  name="allotment-amount"
                  id="allotment-decrease"
                  label="Decrease To"
                  value="Decrease"
                  checked={allotmentAmount === "Decrease"}
                  onChange={() => setAllotmentAmount("Decrease")}
                />
                <Form.Label>New Total</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Answer"
                  value={allotmentNewTotal}
                  onChange={(e) => setAllotmentNewTotal(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="additionalQuestion1"
              >
                <Form.Label>Allottee Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Person/Company who will receive allotment"
                  value={allotteeName}
                  onChange={(e) => setAllotteeName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="additionalQuestion1"
              >
                <Form.Label>Allottee Routing Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Routing Number"
                  value={allotteeRoutingNumber}
                  onChange={handleAllotteeRoutingNumber}
                  maxLength={9}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="additionalQuestion1"
              >
                <Form.Label>Allottee Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Account Number"
                  value={allotteeAccountNumber}
                  onChange={(e) => {
                    setAllotteeAccountNumber(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="additionalQuestion1"
              >
                <Form.Label>Allottee Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Account Holder's Name"
                  value={allotteeTitle}
                  onChange={(e) => setAllotteeTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="additionalQuestion1"
              >
                <Form.Label>Allottee Financial Institution</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Institution Name"
                  value={allotteeBankName}
                  onChange={(e) => setAllotteeBankName(e.target.value)}
                />
              </Form.Group>
            </Row>
            <h5>
              If you would <strong>not</strong> like to alter your allotment
              please click Next/Submit
            </h5>
          </>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg2DirectDeposit;
