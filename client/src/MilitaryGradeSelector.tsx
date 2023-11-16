import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function MilitaryGradeSelector() {
  const grades = [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "E9",
    "O1",
    "O1E",
    "O2",
    "O2E",
    "O3",
    "O3E",
    "O4",
    "O5",
    "O6",
    "O7",
    "O8",
    "O9",
    "O10",
  ];

  return (
    <div>
      <Form.Group>
        <Form.Label>Military Grade</Form.Label>
        <Form.Control list="gradesList" placeholder="Type or select a grade" />
        <datalist id="gradesList">
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </datalist>
      </Form.Group>
    </div>
  );
}

export default MilitaryGradeSelector;
