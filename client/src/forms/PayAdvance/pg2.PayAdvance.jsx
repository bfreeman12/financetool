import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg2PayAdvance = () => {
  const { advancePayFields } = useContext(FormContext);
  const {
    numberOfDependents,
    financialSituationSpecifics,
    setNumberOfDependents,
    setFinancialSituationSpecifics,
    remarks,
    setRemarks,
  } = advancePayFields;
  return (
    <>
      <h5>Pay Advance</h5>
      <p>
        LIST SPECIFICS OF YOUR FINANCIAL SITUATION, INCLUDING OUTSTANDING DEBTS
        AND MONTHLY PAYMENT AMOUNTS THAT INDICATE A SEVERE HARDSHIP IN REPAYING
        THE ADVANCE IN THE NORMAL 12-MONTH TIME PERIOD (Continue in Remarks if
        necessary.)
      </p>
      <Form>
        <Row>
          <Col className="mb-5">
            <Form.Group controlId="numberOfDependents">
              <Form.Label>Number of Dependents</Form.Label>
              <Form.Control
                type="number"
                value={numberOfDependents}
                onChange={(e) => setNumberOfDependents(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="financialSituationSpecifics">
              <Form.Label>Financial Situation Specifics</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={financialSituationSpecifics}
                onChange={(e) => setFinancialSituationSpecifics(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Form.Group controlId="financialSituationSpecifics">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default Pg2PayAdvance;
