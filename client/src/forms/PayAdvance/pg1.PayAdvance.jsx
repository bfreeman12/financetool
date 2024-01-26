import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg1PayAdvance = () => {
  const { advancePayFields } = useContext(FormContext);
  const {
    payRequestType,
    specificAmount,
    payRequestSchedule,
    advancedPayRequestTime,
    numberOfMonths,
    expenses,
    expenseAmounts,
    expenseTotal,
    expenseExplanation,
    numberOfDependents,
    financialSituationSpecifics,
    setPayRequestType,
    setSpecificAmount,
    setNumberOfMonths,
    setPayRequestSchedule,
    setAdvancedPayRequestTime,
    setExpenses,
    setExpenseAmounts,
    setExpenseTotal,
    setExpenseExplanation,
    setNumberOfDependents,
    setFinancialSituationSpecifics,
  } = advancePayFields;
  return (
    <>
      <h5>Pay Advance</h5>
      <Form>
        <Row>
          <Form.Group as={Col} controlId="request">
            <Form.Label>Request</Form.Label>
            <Form.Control
              as="select"
              value={payRequestType}
              onChange={(e) => setPayRequestType(e.target.value)}
            >
              <option>One month advance pay</option>
              <option>More than 1 month but less than 3 months</option>
            </Form.Control>
          </Form.Group>
          {payRequestType === "More than 1 month but less than 3 months" && (
            <Form.Group as={Col} controlId="specificAmount">
              <Form.Label>Specific Amount</Form.Label>
              <Form.Control
                type="number"
                value={specificAmount}
                onChange={(e) => setSpecificAmount(e.target.value)}
              />
            </Form.Group>
          )}
          <Form.Group as={Col} controlId="repaymentSchedule">
            <Form.Label>I request a repayment schedule of</Form.Label>
            <Form.Control
              as="select"
              value={payRequestSchedule}
              onChange={(e) => setPayRequestSchedule(e.target.value)}
            >
              <option>12 months or less</option>
              <option>13-24 months</option>
            </Form.Control>
          </Form.Group>
          {payRequestSchedule && (
            <Form.Group as={Col} controlId="numberOfMonths">
              <Form.Label>Number of Months</Form.Label>
              <Form.Control
                type="number"
                value={numberOfMonths}
                onChange={(e) => setNumberOfMonths(e.target.value)}
              />
            </Form.Group>
          )}
        </Row>
        <Form.Group as={Col} controlId="paymentTime">
          <Form.Label>I request payment of the advance pay</Form.Label>
          <Form.Control
            as="select"
            value={advancedPayRequestTime}
            onChange={(e) => setAdvancedPayRequestTime(e.target.value)}
          >
            <option>
              Within 30 days of PCS or 60 days after reporting to next PCS
            </option>
            <option>31-90 days before my PCS</option>
            <option>61-180 days after arrival at my PDS</option>
          </Form.Control>
        </Form.Group>

        <Row>
          <Col>
            <h5>Expenses</h5>
            {expenses.map((expense, index) => (
              <div key={index}>
                <Row>
                  <Col className="mb-2">
                    <Form.Control
                      placeholder="Expense name"
                      value={expense}
                      onChange={(e) => {
                        const newExpenses = [...expenses];
                        newExpenses[index] = e.target.value;
                        setExpenses(newExpenses);
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Amount"
                      value={expenseAmounts[index] || ""}
                      onChange={(e) => {
                        const newExpenseAmounts = [...expenseAmounts];
                        newExpenseAmounts[index] = e.target.value;
                        setExpenseAmounts(newExpenseAmounts);
                        setExpenseTotal(
                          newExpenseAmounts.reduce((a, b) => a + Number(b), 0)
                        );
                      }}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="danger"
                      onClick={() => {
                        const newExpenses = [...expenses];
                        newExpenses.splice(index, 1);
                        setExpenses(newExpenses);

                        const newExpenseAmounts = [...expenseAmounts];
                        newExpenseAmounts.splice(index, 1);
                        setExpenseAmounts(newExpenseAmounts);
                        setExpenseTotal(
                          newExpenseAmounts.reduce((a, b) => a + Number(b), 0)
                        );
                      }}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
            <Button
              onClick={() => {
                setExpenses([...expenses, ""]);
                setExpenseAmounts([...expenseAmounts, ""]);
              }}
            >
              Add Expense
            </Button>
            <h5>Total: {expenseTotal}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="expenseExplanation">
              <Form.Label>Explanation of Expenses</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={expenseExplanation}
                onChange={(e) => setExpenseExplanation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Pg1PayAdvance;
