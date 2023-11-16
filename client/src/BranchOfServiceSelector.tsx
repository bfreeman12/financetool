import React, { useState } from "react";
import { Form } from "react-bootstrap";

function BranchOfServiceSelector() {
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  return (
    <Form.Group className="mb-3" controlId="branchOfService">
      <Form.Label>Branch of Service</Form.Label>
      <Form.Control
        as="select"
        value={selectedBranch}
        onChange={handleBranchChange}
      >
        <option value="">Select a Branch</option>
        <option value="Army">Army</option>
        <option value="Marine Corps">Marine Corps</option>
        <option value="Navy">Navy</option>
        <option value="Air Force">Air Force</option>
        <option value="Coast Guard">Coast Guard</option>
        <option value="Space Force">Space Force</option>
        <option value="National Guard">National Guard</option>
        <option value="Reserves">Reserves</option>
      </Form.Control>
    </Form.Group>
  );
}

export default BranchOfServiceSelector;
