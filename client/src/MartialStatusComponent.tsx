import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import BranchOfServiceSelector from "./BranchOfServiceSelector";
import DutyLocationSelector from "./DutyLocationSelector";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import "react-calendar/dist/Calendar.css";

function MarriageStatusComponent() {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [spouseInMilitary, setSpouseInMilitary] = useState(false);
  const [marriageValue, onChangeMarriage] = useState<Value>(new Date());

  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.id);
  };

  const handleSpouseMilitaryChange = (e) => {
    setSpouseInMilitary(e.target.checked);
  };

  return (
    <div>
      <h3 className="mb-4">Martial Status / Dependents</h3>
      <div className="d-flex justify-content-center">
        <div
          className="container p-3 my-3 border"
          style={{ maxWidth: "600px" }}
        >
          {/* Other form fields here */}

          <Form.Group className="mb-3">
            <Form.Label>Type of Request</Form.Label>
            <div className="mb-3">
              <Form.Check
                inline
                label="Single, No Dependents"
                name="maritalStatus"
                type="radio"
                id="single"
                onChange={handleMaritalStatusChange}
              />
              <Form.Check
                inline
                label="Single, Claiming Dependent(s)"
                name="maritalStatus"
                type="radio"
                id="single-dep"
                onChange={handleMaritalStatusChange}
              />
              <Form.Check
                inline
                label="Married"
                name="maritalStatus"
                type="radio"
                id="married"
                onChange={handleMaritalStatusChange}
              />
              <Form.Check
                inline
                label="Divorced"
                name="maritalStatus"
                type="radio"
                id="divorced"
                onChange={handleMaritalStatusChange}
              />
              <Form.Check
                inline
                label="Legally Seperated"
                name="maritalStatus"
                type="radio"
                id="LegallySeperated"
                onChange={handleMaritalStatusChange}
              />
            </div>
            {maritalStatus === "married" && (
              // Additional fields for married status
              <div>
                <Form.Group as={Col} md="4" controlId="spouseName">
                  <Form.Label>Spouse's Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter spouse's name" />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Is your spouse in the military?"
                  onChange={handleSpouseMilitaryChange}
                />

                {spouseInMilitary && (
                  <div>
                    {/* Additional fields for military spouse */}
                    <Form.Group className="mb-3" controlId="dodID">
                      <Form.Label>DoD ID Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your DoD ID"
                      />
                    </Form.Group>
                    <BranchOfServiceSelector />
                    <DutyLocationSelector />
                    <Form.Group className="mb-3" controlId="marriageDate">
                      <Form.Label>Marriage Date</Form.Label>
                      <Calendar
                        onChange={onChangeMarriage}
                        value={marriageValue}
                      />
                    </Form.Group>
                    {/* Add more fields as needed */}
                  </div>
                )}
              </div>
            )}
            {maritalStatus === "divorced" && (
              <Form.Group className="mb-3" controlId="marriageDate">
                <Form.Label>Divorced</Form.Label>
                <Calendar onChange={onChangeMarriage} value={marriageValue} />
              </Form.Group>
            )}
            {maritalStatus === "legallySeperated" && (
              <Form.Group className="mb-3" controlId="marriageDate">
                <Form.Label>Legally Seperated Date</Form.Label>
                <Calendar onChange={onChangeMarriage} value={marriageValue} />
              </Form.Group>
            )}
          </Form.Group>

          {/* Submit button and other components */}
        </div>
      </div>
    </div>
  );
}

export default MarriageStatusComponent;
