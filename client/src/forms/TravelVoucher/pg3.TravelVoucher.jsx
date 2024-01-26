import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";
import Button from "react-bootstrap/Button";

const Pg3TravelVoucher = () => {
  const { voucherFields } = useContext(FormContext);
  const { deductableMeals, setDeductableMeals, remarks, setRemarks } =
    voucherFields;

  const addDeductableMeal = () => {
    if (deductableMeals.length < 8) {
      const newDeductableMeals = [
        ...deductableMeals,
        {
          date: "",
          numberOfMeals: "",
        },
      ];
      setDeductableMeals(newDeductableMeals);
    } else {
      alert("You can only add up to 8 meals.");
    }
  };

  const removeDeductableMeal = (index) => {
    const newDeductableMeals = deductableMeals.filter((_, i) => i !== index);
    setDeductableMeals(newDeductableMeals);
  };

  const handleInputChange = (e, index, field) => {
    const newDeductableMeals = [...deductableMeals];
    newDeductableMeals[index][field] = e.target.value;
    setDeductableMeals(newDeductableMeals);
  };

  return (
    <>
      <h5>Government / Deductible Meals</h5>
      <Form>
        {deductableMeals.map((meal, index) => (
          <Form.Group key={index}>
            <Form.Label>Meal {index + 1}</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="date"
                  value={meal.date}
                  onChange={(e) => handleInputChange(e, index, "date")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Number of Meals"
                  value={meal.numberOfMeals}
                  onChange={(e) => handleInputChange(e, index, "numberOfMeals")}
                />
              </Col>
              <Col>
                <Button size="sm" onClick={() => removeDeductableMeal(index)}>
                  Remove Meal
                </Button>
              </Col>
            </Row>
          </Form.Group>
        ))}
        <Button onClick={addDeductableMeal}>Add Meal</Button>
        <Form.Group controlId="remarks">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Pg3TravelVoucher;
