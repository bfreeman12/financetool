import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";

type FamilyMember = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  dob: string;
  relationship: string;
};

function FamilyMemberAccordion() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const addFamilyMember = () => {
    const newMember: FamilyMember = {
      firstName: "",
      lastName: "",
      middleInitial: "",
      dob: "",
      relationship: "",
    };
    setFamilyMembers([...familyMembers, newMember]);
    // Update active keys to open the new accordion item
    setActiveKeys([...activeKeys, `${familyMembers.length}`]);
  };

  const deleteFamilyMember = (index: number) => {
    const updatedMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedMembers);
    setActiveKeys(activeKeys.filter((key) => parseInt(key) !== index));
  };

  const handleInputChange = (index: number, event: React.ChangeEvent<any>) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][event.target.name as keyof FamilyMember] =
      event.target.value;
    setFamilyMembers(updatedMembers);
  };

  const handleToggle = (eventKey: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeKeys.includes(eventKey)) {
      setActiveKeys(activeKeys.filter((key) => key !== eventKey));
    } else {
      setActiveKeys([...activeKeys, eventKey]);
    }
  };

  return (
    <div>
      <Accordion activeKey={activeKeys}>
        {familyMembers.map((member, index) => (
          <Accordion.Item eventKey={`${index}`} key={index}>
            <Accordion.Header onClick={(e) => handleToggle(`${index}`, e)}>
              {member.firstName} {member.lastName}
              {member.relationship && ` - ${member.relationship}`}
            </Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={member.firstName}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={member.lastName}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Middle Initial</Form.Label>
                <Form.Control
                  type="text"
                  name="middleInitial"
                  value={member.middleInitial}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={member.dob}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Relationship</Form.Label>
                <Form.Control
                  type="text"
                  name="relationship"
                  value={member.relationship}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Form.Group>

              <Button
                variant="danger"
                onClick={() => deleteFamilyMember(index)}
              >
                Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br />
      <Button onClick={addFamilyMember}>Add Family Member</Button>
    </div>
  );
}

export default FamilyMemberAccordion;
