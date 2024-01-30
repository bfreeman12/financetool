import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { FormContext } from "../../formcontext/form.context";

//need to  fetch name dod and date from userprofile before exporting
export const Pg3BahApplication = () => {
  const [dependents, setDependents] = useState([
    { name: "", address: "", relationship: "", dob: "" },
  ]);

  const addDependent = () => {
    if (dependents.length < 6) {
      setDependents([
        ...dependents,
        { name: "", address: "", relationship: "", dob: "" },
      ]);
    }
  };

  const removeDependent = (index) => {
    setDependents(dependents.filter((_, i) => i !== index));
  };

  const handleDependentChange = (index, field, value) => {
    const newDependents = [...dependents];
    newDependents[index][field] = value;
    setDependents(newDependents);
  };

  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          dependentMilitaryName,
          dependentMilitaryDODID,
          dependentMilitaryBranch,
          dependentMilitaryStation,
          memberCertification,
          firstApplication,
          firstApplicationDate,
          additionalInformation,
          custodyDate,
          setCustodyDate,
          setDependentMilitaryName,
          setDependentMilitaryDODID,
          setDependentMilitaryBranch,
          setDependentMilitaryStation,
          setMemberCertification,
          setFirstApplication,
          setFirstApplicationDate,
          setAdditionalInformation,
        } = value.bahFields;
        return (
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDependentMilitaryName">
                <Form.Label>Dependent Military Name</Form.Label>
                <Form.Control
                  value={dependentMilitaryName}
                  type="text"
                  placeholder="Dependent Military Name"
                  onChange={(e) => setDependentMilitaryName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formDependentMilitaryDODID">
                <Form.Label>Dependent Military DOD ID</Form.Label>
                <Form.Control
                  value={dependentMilitaryDODID}
                  type="text"
                  placeholder="Dependent Military DOD ID"
                  onChange={(e) => setDependentMilitaryDODID(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formDependentMilitaryBranch">
                <Form.Label>Dependent Military Branch</Form.Label>
                <Form.Control
                  value={dependentMilitaryBranch}
                  type="text"
                  placeholder="Dependent Military Branch"
                  onChange={(e) => setDependentMilitaryBranch(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDependentMilitaryStation">
                <Form.Label>Dependent Military Station</Form.Label>
                <Form.Control
                  value={dependentMilitaryStation}
                  type="text"
                  placeholder="Dependent Military Station"
                  onChange={(e) => setDependentMilitaryStation(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="formMemberCertification">
                <Form.Label>
                  I certify that I provide adequate support (see DoD FMR Vol 7A,
                  Chapter 26) for the dependents named above. I am aware that
                  failure to adequately support the above named dependents will
                  result in stopping BAH, and recouping allowances paid for any
                  prior periods of nonsupport
                </Form.Label>
              </Form.Group>
              <Form.Group
                as={Col}
                md={3}
                controlId="formMemberCertificationCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="I Agree"
                  checked={memberCertification}
                  onChange={(e) => setMemberCertification(e.target.checked)}
                  style={{ marginTop: "2rem" }}
                />
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="formFirstApplicationDate">
                <Form.Label>First Application Date</Form.Label>
                <Form.Control
                  value={firstApplicationDate}
                  type="date"
                  placeholder="First Application Date"
                  onChange={(e) => setFirstApplicationDate(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFirstApplication">
                <Form.Label>First Application</Form.Label>
                <Form.Control
                  as="select"
                  value={firstApplication}
                  onChange={(e) =>
                    setFirstApplication(e.target.value === "Yes")
                  }
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formCustodyDate">
                <Form.Label>Custody Date</Form.Label>
                <Form.Control
                  value={custodyDate}
                  type="date"
                  placeholder="First Application Date"
                  onChange={(e) => setCustodyDate(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formAdditionalInformation">
              <Form.Label>Additional Information</Form.Label>
              <Form.Control
                as="textarea"
                value={additionalInformation}
                placeholder="Additional Information"
                onChange={(e) => setAdditionalInformation(e.target.value)}
              />
            </Form.Group>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};
