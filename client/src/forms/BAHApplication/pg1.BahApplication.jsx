import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";

//need to  fetch name dod and date from userprofile before exporting
const Pg1BahApplication = () => {
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          dutyLocation,
          dutyLocationState,
          dutyLocationZip,
          dutyLocationCountry,
          memberStreet,
          memberCity,
          memberState,
          divorced,
          separated,
          memberZip,
          maritalStatus,
          spouseName,
          spouseDodId,
          spouseBranch,
          spouseDutyStation,
          spouseDateOfMarriage,
          divorceDate,
          legalSeperationDate,
          setDutyLocation,
          setDutyLocationState,
          setDutyLocationZip,
          setDutyLocationCountry,
          setMemberStreet,
          setMemberCity,
          setMemberState,
          setMemberZip,
          setMaritalStatus,
          setSpouseName,
          setDivorced,
          setSeparated,
          setSpouseDodId,
          setSpouseBranch,
          setSpouseDutyStation,
          setSpouseDateOfMarriage,
          setDivorceDate,
          setLegalSeperationDate,
        } = value.bahFields;

        return (
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDutyLocation">
                <Form.Label>Duty Location</Form.Label>
                <Form.Control
                  value={dutyLocation}
                  type="Text"
                  placeholder="Duty Location"
                  onChange={(e) => setDutyLocation(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formDutyLocationState">
                <Form.Label>Duty Location State</Form.Label>
                <Form.Control
                  value={dutyLocationState}
                  type="text"
                  placeholder="Duty Location State"
                  onChange={(e) => setDutyLocationState(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formDutyLocationZip">
                <Form.Label>Duty Location Zip</Form.Label>
                <Form.Control
                  value={dutyLocationZip}
                  type="text"
                  placeholder="Duty Location Zip"
                  onChange={(e) => setDutyLocationZip(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formDutyLocationCountry">
                <Form.Label>Duty Location Country</Form.Label>
                <Form.Control
                  value={dutyLocationCountry}
                  type="text"
                  placeholder="Duty Location Country"
                  onChange={(e) => setDutyLocationCountry(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formMemberStreet">
                <Form.Label>Member Street</Form.Label>
                <Form.Control
                  value={memberStreet}
                  type="text"
                  placeholder="Member Street"
                  onChange={(e) => setMemberStreet(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formMemberCity">
                <Form.Label>Member City</Form.Label>
                <Form.Control
                  value={memberCity}
                  type="text"
                  placeholder="Member City"
                  onChange={(e) => setMemberCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formMemberState">
                <Form.Label>Member State</Form.Label>
                <Form.Control
                  value={memberState}
                  type="text"
                  placeholder="Member State"
                  onChange={(e) => setMemberState(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formMemberZip">
                <Form.Label>Member Zip</Form.Label>
                <Form.Control
                  value={memberZip}
                  type="text"
                  placeholder="Member Zip"
                  onChange={(e) => setMemberZip(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formMaritalStatus">
                <Form.Label>Marital Status</Form.Label>
                <Form.Control
                  as="select"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="SINGLE, NO DEPENDENTS">
                    SINGLE, NO DEPENDENTS
                  </option>
                  <option value="SINGLE, CLAIMING DEPENDENT(S)">
                    SINGLE, CLAIMING DEPENDENT(S)
                  </option>
                  <option value="MARRIED - SPOUSE IS A CIVILIAN">
                    MARRIED - SPOUSE IS A CIVILIAN
                  </option>
                  <option value="MILITARY MEMBER">MILITARY MEMBER</option>
                </Form.Control>
              </Form.Group>

              {maritalStatus === "MILITARY MEMBER" && (
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formSpouseName">
                    <Form.Label>Spouse Name</Form.Label>
                    <Form.Control
                      value={spouseName}
                      type="text"
                      placeholder="Spouse Name"
                      onChange={(e) => setSpouseName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSpouseDodId">
                    <Form.Label>Spouse DOD ID</Form.Label>
                    <Form.Control
                      value={spouseDodId}
                      type="text"
                      placeholder="Spouse DOD ID"
                      onChange={(e) => setSpouseDodId(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSpouseBranch">
                    <Form.Label>Spouse Branch</Form.Label>
                    <Form.Control
                      value={spouseBranch}
                      type="text"
                      placeholder="Spouse Branch"
                      onChange={(e) => setSpouseBranch(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSpouseDutyStation">
                    <Form.Label>Spouse Duty Station</Form.Label>
                    <Form.Control
                      value={spouseDutyStation}
                      type="text"
                      placeholder="Spouse Duty Station"
                      onChange={(e) => setSpouseDutyStation(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formSpouseMarriageDate">
                    <Form.Label>Marriage Date</Form.Label>
                    <Form.Control
                      value={spouseDateOfMarriage}
                      type="text"
                      placeholder="Spouse Marriage Date"
                      onChange={(e) => setSpouseDateOfMarriage(e.target.value)}
                    />
                  </Form.Group>
                </Row>
              )}
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDivorced">
                <Form.Check
                  type="checkbox"
                  label="Divorced"
                  checked={divorced}
                  onChange={() => {
                    setDivorced(!divorced);
                    if (divorced) {
                      setDivorceDate("");
                    }
                    setSeparated(false);
                  }}
                />
                {divorced && (
                  <Form.Control
                    value={divorceDate}
                    type="date"
                    placeholder="Divorce Date"
                    onChange={(e) => setDivorceDate(e.target.value)}
                  />
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formSeparated">
                <Form.Check
                  type="checkbox"
                  label="Separated"
                  checked={separated}
                  onChange={() => {
                    setSeparated(!separated);
                    if (separated) {
                      setLegalSeperationDate("");
                    }
                    setDivorced(false);
                  }}
                />
                {separated && (
                  <Form.Control
                    value={legalSeperationDate}
                    type="date"
                    placeholder="Legal Seperation Date"
                    onChange={(e) => setLegalSeperationDate(e.target.value)}
                  />
                )}
              </Form.Group>
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg1BahApplication;
