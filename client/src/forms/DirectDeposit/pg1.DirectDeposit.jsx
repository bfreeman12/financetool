import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";

const Pg1DirectDeposit = () => {
  const [paymentType, setPaymentType] = useState("");

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          accountType,
          paymentType,
          routingNumber,
          accountNumber,
          checkDigit,
          bankName,
          accountTitle,
          setAccountType,
          setPaymentType,
          setRoutingNumber,
          setAccountNumber,
          setCheckDigit,
          setBankName,
          setAccountTitle,
        } = value.payrollFields;

        return (
          <Form>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="accountType">
                <Form.Label>Account Type</Form.Label>
                <Form.Check
                  type="radio"
                  name="account-type"
                  id="checkings-account"
                  label="Checking"
                  checked={accountType === "Checking"}
                  onChange={() => setAccountType("Checking")}
                />
                <Form.Check
                  type="radio"
                  name="account-type"
                  id="savings-account"
                  label="Savings"
                  checked={accountType === "Savings"}
                  onChange={() => setAccountType("Savings")}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="accountRouting">
                <Form.Label>Routing Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Routing Number"
                  value={routingNumber}
                  onChange={(e) => setRoutingNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="accountNumber">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="accountCheckDigit"
              >
                <Form.Label>Check Digit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Check Digit"
                  value={checkDigit}
                  onChange={(e) => setCheckDigit(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="paymentType">
                <Form.Label>Type of Payment</Form.Label>
                <Form.Check
                  type="radio"
                  name="payment-type"
                  label="Net Pay"
                  id="net-pay"
                  value="Net Pay"
                  checked={paymentType === "Net Pay"}
                  onChange={() => setPaymentType("Net Pay")}
                />
                <Form.Check
                  type="radio"
                  name="payment-type"
                  label="Travel"
                  id="travel-payments"
                  value="Travel"
                  checked={paymentType === "Travel"}
                  onChange={() => setPaymentType("Travel")}
                />
                <Form.Check
                  type="radio"
                  name="payment-type"
                  label="Other Federal Payments"
                  id="other-payments"
                  value="Other Federal Payments"
                  checked={paymentType === "Other Federal Payments"}
                  onChange={() => setPaymentType("Other Federal Payments")}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="accountTitle">
                <Form.Label>Account Title</Form.Label>
                <Form.Control
                  value={accountTitle}
                  onChange={(e) => setAccountTitle(e.target.value)}
                  type="text"
                  placeholder="Account Owner's Name"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="accountTitle">
                <Form.Label>Financial Institution</Form.Label>
                <Form.Control
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  type="text"
                  placeholder="Bank Name"
                />
              </Form.Group>
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg1DirectDeposit;
