import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";

//need to  fetch name dod and date from userprofile before exporting
export const Pg2BahApplication = () => {
  const [dependentNames, setDependentName] = useState([]);
  const [dependentAddress, setDependentAddress] = useState([]);
  const [dependentRelationship, setDependentRelationship] = useState([]);
  const [dependentDOB, setDependentDOB] = useState([]);
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          nonCustodialFullAmount,
          nonCustodialPerMonth,
          custodyBasedOn,
          claimingDependent,
          claimEffectiveDate,
          memberCertification,
          firstApplication,
          firstApplicationDate,
          additionalInformation,
          setNonCustodialFullAmount,
          setNonCustodialPerMonth,
          setCustodyBasedOn,
          setClaimingDependent,
          setClaimEffectiveDate,
          dependents,
          setDependents,
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
              <Form.Group as={Col} controlId="formNonCustodialFullAmount">
                <Form.Label>I pay full with dependent BAH</Form.Label>
                <Form.Control
                  as="select"
                  value={nonCustodialFullAmount}
                  onChange={(e) => setNonCustodialFullAmount(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>

              {nonCustodialFullAmount === "No" && (
                <Form.Group as={Col} controlId="formNonCustodialPerMonth">
                  <Form.Label>Paid Per Month</Form.Label>
                  <Form.Control
                    value={nonCustodialPerMonth}
                    type="text"
                    placeholder="Non Custodial Per Month"
                    onChange={(e) => setNonCustodialPerMonth(e.target.value)}
                  />
                </Form.Group>
              )}

              <Form.Group as={Col} controlId="formCustodyBasedOn">
                <Form.Label>Custody Based On</Form.Label>
                <Form.Control
                  as="select"
                  value={custodyBasedOn}
                  onChange={(e) => setCustodyBasedOn(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="Divorce decree">Divorce decree</option>
                  <option value="Court order">Court order</option>
                  <option value="Legal separation agreement">
                    Legal separation agreement
                  </option>
                  <option value="Written agreement with child's custodian">
                    Written agreement with child's custodian
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formClaimingDependent">
                <Form.Label>Claiming Dependent</Form.Label>
                <Form.Control
                  as="select"
                  value={claimingDependent}
                  onChange={(e) => setClaimingDependent(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="Not claiming dependent">
                    Not claiming dependent
                  </option>
                  <option value="In my legal and physical custody">
                    In my legal and physical custody
                  </option>
                  <option value="Not in my legal and physical custody">
                    Not in my legal and physical custody
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formClaimEffectiveDate">
                <Form.Label>Claim Effective Date</Form.Label>
                <Form.Control
                  value={claimEffectiveDate}
                  type="date"
                  placeholder="Claim Effective Date"
                  onChange={(e) => setClaimEffectiveDate(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              {[...Array(5)].map((_, index) => (
                <Row className="mb-3" key={index}>
                  <Form.Group as={Col} controlId={`formDependentNames${index}`}>
                    <Form.Label>Dependent Name</Form.Label>
                    <Form.Control
                      value={dependents[index]?.name || ""}
                      type="text"
                      placeholder="Dependent Name"
                      onChange={(e) => {
                        let newDependents = [...dependents];
                        newDependents[index] = {
                          ...newDependents[index],
                          name: e.target.value,
                        };
                        setDependents(newDependents);
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId={`formDependentAddress${index}`}
                  >
                    <Form.Label>Dependent Address</Form.Label>
                    <Form.Control
                      value={dependents[index]?.address || ""}
                      type="text"
                      placeholder="Dependent Address"
                      onChange={(e) => {
                        let newDependents = [...dependents];
                        newDependents[index] = {
                          ...newDependents[index],
                          address: e.target.value,
                        };
                        setDependents(newDependents);
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId={`formDependentRelationship${index}`}
                  >
                    <Form.Label>Dependent Relationship</Form.Label>
                    <Form.Control
                      value={dependents[index]?.relationship || ""}
                      type="text"
                      placeholder="Dependent Relationship"
                      onChange={(e) => {
                        let newDependents = [...dependents];
                        newDependents[index] = {
                          ...newDependents[index],
                          relationship: e.target.value,
                        };
                        setDependents(newDependents);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId={`formDependentDOB${index}`}>
                    <Form.Label>Dependent Date of Birth</Form.Label>
                    <Form.Control
                      value={dependents[index]?.dob || ""}
                      type="date"
                      placeholder="Dependent Date of Birth"
                      onChange={(e) => {
                        let newDependents = [...dependents];
                        newDependents[index] = {
                          ...newDependents[index],
                          dob: e.target.value,
                        };
                        setDependents(newDependents);
                      }}
                    />
                  </Form.Group>
                </Row>
              ))}
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};
