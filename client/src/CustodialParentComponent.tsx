import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FamilyMemberComponent from "./FamilyMemberComponent";
function CustodialParentComponent() {
  const [custodialParentStatus, setcustodialParentStatus] = useState(false);
  const [dependentRateBAH, setDependentRateBAH] = useState("");
  const [rateDepedency, setrateDepedency] = useState("");

  const handleRateDependencyChange = (event) => {
    setrateDepedency(event.target.id);
  };

  const handleDepedentRateBAHChange = (event) => {
    setDependentRateBAH(event.target.id);
  };

  const handleCustodialParentStatusChange = (e) => {
    setcustodialParentStatus(!custodialParentStatus);
  };

  return (
    <div>
      <Form.Group>
        <Form.Check
          type="checkbox"
          id="custodialParent"
          onChange={handleCustodialParentStatusChange}
          label="Are you a non-custodial parent?"
        />
      </Form.Group>
      {custodialParentStatus === true && (
        <div>
          <Form.Group>
            <Form.Label>
              Do you pay the full amount of with-dependent rate BAH?
            </Form.Label>
            <br />
            <Form.Check
              type="radio"
              inline
              id="depedentRateBAHYes"
              name="dependentRateBAH"
              onChange={handleDepedentRateBAHChange}
              label="Yes"
              checked={dependentRateBAH === "depedentRateBAHYes"}
            />
            <Form.Check
              type="radio"
              inline
              id="depedentRateBAHNo"
              name="dependentRateBAH"
              onChange={handleDepedentRateBAHChange}
              label="No"
              checked={dependentRateBAH === "depedentRateBAHNo"}
            />
          </Form.Group>

          {dependentRateBAH === "depedentRateBAHNo" && (
            <div>
              <Form.Group className="mb-3" controlId="amount">
                <Form.Label>
                  How much do you pay per month for dependent support?
                </Form.Label>
                <Form.Control type="text" placeholder="Enter amount" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>What is this amount based on?</Form.Label>

                <Form.Check
                  label="Divorce Decree"
                  name="rateDependency"
                  type="radio"
                  id="divorceDecree"
                  onChange={handleRateDependencyChange}
                />
                <Form.Check
                  label="Court Order"
                  name="rateDependency"
                  type="radio"
                  id="courtOrder"
                  onChange={handleRateDependencyChange}
                />
                <Form.Check
                  label="Legal Seperation Agreement"
                  name="rateDependency"
                  type="radio"
                  id="legalSeperationAgreement"
                  onChange={handleRateDependencyChange}
                />
                <Form.Check
                  label="Written Agreement with child's custodian"
                  name="rateDependency"
                  type="radio"
                  id="writtenAgreement"
                  onChange={handleRateDependencyChange}
                />
              </Form.Group>
            </div>
          )}
        </div>
      )}
      <FamilyMemberComponent />
    </div>
  );
}

export default CustodialParentComponent;
