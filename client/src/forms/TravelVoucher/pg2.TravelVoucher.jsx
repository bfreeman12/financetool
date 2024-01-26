import React, { useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg2TravelVoucher = () => {
  const { voucherFields } = useContext(FormContext);
  const { reimbursableExpense, setReimbursableExpense } = voucherFields;

  const addReimbursableExpense = () => {
    if (reimbursableExpense.length < 8) {
      const newReimbursableExpenses = [
        ...reimbursableExpense,
        {
          date: "",
          natureOfExpense: "",
          amount: "",
          allowed: "",
        },
      ];
      setReimbursableExpense(newReimbursableExpenses);
    } else {
      alert("You can only add up to 8 expenses.");
    }
  };
  const removeReimbursableExpense = (index) => {
    const newReimbursableExpenses = reimbursableExpense.filter(
      (_, i) => i !== index
    );
    setReimbursableExpense(newReimbursableExpenses);
  };

  const handleInputChange = (e, index, field) => {
    const newReimbursableExpenses = [...reimbursableExpense];
    newReimbursableExpenses[index][field] = e.target.value;
    setReimbursableExpense(newReimbursableExpenses);
  };

  return (
    <>
      <h5>Reimbursable Expenses</h5>
      <Form>
        {reimbursableExpense.map((expense, index) => (
          <Form.Group key={index}>
            <Form.Label>Expense {index + 1}</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="date"
                  value={expense.date}
                  onChange={(e) => handleInputChange(e, index, "date")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Nature of Expense"
                  value={expense.natureOfExpense}
                  onChange={(e) =>
                    handleInputChange(e, index, "natureOfExpense")
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  value={expense.amount}
                  onChange={(e) => handleInputChange(e, index, "amount")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Allowed"
                  value={expense.allowed}
                  onChange={(e) => handleInputChange(e, index, "allowed")}
                />
              </Col>
              <Col>
                <Button
                  size="sm"
                  onClick={() => removeReimbursableExpense(index)}
                >
                  Remove Expense
                </Button>
              </Col>
            </Row>
          </Form.Group>
        ))}
        <Button onClick={addReimbursableExpense}>Add Expense</Button>
      </Form>
    </>
  );
};

export default Pg2TravelVoucher;
