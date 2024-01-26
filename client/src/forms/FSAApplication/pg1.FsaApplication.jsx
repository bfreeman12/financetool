import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";

//need to  fetch name dod and date from userprofile before exporting
const Pg1FsaApplication = () => {
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          org,
          setOrg,
          fsaType,
          setFsaType,
          dateDeparted,
          setDateDeparted,
          dependentAddress,
          setDependentAddress,
          divorced,
          setDivorced,
          legalCustody,
          setLegalCustody,
          dependentMilitary,
          setDependentMilitary,
          lastTdy,
          setLastTdy,
          institution,
          setInstitution,
          parents,
          setParents,
          marriedToActive,
          setMarriedToActive,
          wasResiding,
          setWasResiding,
          spouseDodId,
          setSpouseDodId,
          spouseBranchComponent,
          setSpouseBranchComponent,
        } = value.fsaFields;

        return (
          <Form>
            <Row className="md-3">
              <Form.Group as={Col} controlId="UserOrg">
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Organization"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="UserFsaSelection">
                <Form.Label>FSA Type</Form.Label>
                <Form.Control
                  as="select"
                  value={fsaType}
                  onChange={(e) => setFsaType(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="FSA-T">FSA-T</option>
                  <option value="FSA-R">FSA-R</option>
                  <option value="FSA-S">FSA-S</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formDepartureDate">
                <Form.Label>
                  Date Departed Residence to Unit Home Station
                </Form.Label>
                <Form.Control
                  type="date"
                  value={dateDeparted}
                  onChange={(e) => setDateDeparted(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="md-3">
              <Form.Group as={Col} controlId="formDependentAddress">
                <Form.Label>Complete Dependent Address</Form.Label>
                <Form.Control
                  type="text"
                  value={dependentAddress}
                  onChange={(e) => setDependentAddress(e.target.value)}
                  placeholder="Enter complete dependent address"
                />
              </Form.Group>
            </Row>
            <Row className="md-3">
              <Form.Group>
                <Form.Label>
                  I CERTIFY TO THE FOLLOWING FACTS (X applicable box(es))
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  label="I am not divorced or legally separated from my spouse."
                  checked={divorced}
                  onChange={(e) => setDivorced(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="My dependent child (children) was (were) not in the legal custody of another person when I received my military orders."
                  checked={legalCustody}
                  onChange={(e) => setLegalCustody(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="My dependent (other than my spouse; see line f. below) is not a member of the military service on active duty."
                  checked={dependentMilitary}
                  onChange={(e) => setDependentMilitary(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="My sole dependent is not in an institution for a known period of over 1 year or a period expected to exceed 1 year."
                  checked={institution}
                  onChange={(e) => setInstitution(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="I am claiming FSA for my parent(s) for whom I have a current and approved dependency status and am residing with, and I maintain a residence(s) for my dependent(s)."
                  checked={parents}
                  onChange={(e) => setParents(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="I am married to another military member currently serving on active duty."
                  checked={marriedToActive}
                  onChange={(e) => setMarriedToActive(e.target.checked)}
                />
                {marriedToActive && (
                  <>
                    <Form.Check
                      type="checkbox"
                      label="My spouse was residing with me immediately before being separated by execution of my military orders."
                      checked={wasResiding}
                      onChange={(e) => setWasResiding(e.target.checked)}
                    />
                    <Form.Check
                      type="checkbox"
                      label="My spouse was not residing with me immediately before being separated by execution of my military orders."
                      checked={!wasResiding}
                      onChange={(e) => setWasResiding(!e.target.checked)}
                    />
                    <Row className="md-5">
                      <Form.Group as={Col} controlId="formSpouseDoDId">
                        <Form.Label>Spouse’s DoD ID number</Form.Label>
                        <Form.Control
                          type="text"
                          value={spouseDodId}
                          onChange={(e) => setSpouseDodId(e.target.value)}
                          placeholder="Enter Spouse’s DoD ID number"
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="formSpouseBranchComponent"
                      >
                        <Form.Label>Spouse’s Branch and Component</Form.Label>
                        <Form.Control
                          type="text"
                          value={spouseBranchComponent}
                          onChange={(e) =>
                            setSpouseBranchComponent(e.target.value)
                          }
                          placeholder="Enter Spouse’s Branch and Component"
                        />
                      </Form.Group>
                    </Row>
                  </>
                )}
                <Form.Check
                  type="checkbox"
                  label="My last TDY or deployment, if any, was within the last 30 days from this TDY or deployment."
                  checked={lastTdy}
                  onChange={(e) => setLastTdy(e.target.checked)}
                />
              </Form.Group>
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg1FsaApplication;
