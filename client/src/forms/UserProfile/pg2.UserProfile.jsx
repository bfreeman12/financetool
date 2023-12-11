import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormContext } from "../../formcontext/form.context";

const Pg2UserProfile = () => {
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          dutyTitle,
          setDutyTitle,
          workPhone,
          setWorkPhone,
          supervisorName,
          setSupervisorName,
          supervisorEmail,
          ssn,
          setSsn,
          setSupervisorEmail,
          supervisorPhone,
          setSupervisorPhone,
          todaysDate,
          setTodaysDate,
        } = value.userProfile;

        return (
          <Form>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formUserWorkPhone"
              >
                <Form.Label>Work Phone</Form.Label>
                <Form.Control
                  value={workPhone}
                  type="tel"
                  placeholder="xxx-xxxx"
                  onChange={(e) => setWorkPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserSocial">
                <Form.Label>SSN</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="***-**-****"
                  value={ssn}
                  onChange={(e) => setSsn(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formUserDutyTitle"
              >
                <Form.Label>Duty Title</Form.Label>
                <Form.Control
                  value={dutyTitle}
                  type="text"
                  placeholder="Enter Duty Title"
                  onChange={(e) => setDutyTitle(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUserSupervisorName">
                <Form.Label>Supervisor Full Name</Form.Label>
                <Form.Control
                  value={supervisorName}
                  type="text"
                  placeholder="John Doe"
                  onChange={(e) => setSupervisorName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formUserSupervisorEmail"
              >
                <Form.Label>Supervisor Email</Form.Label>
                <Form.Control
                  value={supervisorEmail}
                  type="email"
                  placeholder="johndoe@mail.mil"
                  onChange={(e) => setSupervisorEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formUserSupervisorPhone"
              >
                <Form.Label>Supervisor Phone</Form.Label>
                <Form.Control
                  value={supervisorPhone}
                  type="tel"
                  placeholder="xxx-xxx-xxxx"
                  onChange={(e) => setSupervisorPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="w-50">
                <Form.Label>Today's Date</Form.Label>
                <Form.Control
                  type="date"
                  value={todaysDate}
                  onChange={(e) => setTodaysDate(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg2UserProfile;
