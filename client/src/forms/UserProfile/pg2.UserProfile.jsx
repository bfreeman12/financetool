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
          userBranch,
          setUserBranch,
          setWorkPhone,
          supervisorName,
          setSupervisorName,
          supervisorEmail,
          ssn,
          userServiceType,
          setUserServiceType,
          userRank,
          setUserRank,
          userGrade,
          setUserGrade,
          setSsn,
          dodId,
          setDodId,
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
                  type="number"
                  placeholder="***-**-****"
                  value={ssn}
                  pattern="\d{3}-?\d{2}-?\d{4}"
                  onChange={(e) => setSsn(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserDodId">
                <Form.Label>DoD ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="DoD ID"
                  value={dodId}
                  onChange={(e) => setDodId(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUserBranch">
                <Form.Label>Branch of Service</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex. Air Force / Army"
                  value={userBranch}
                  onChange={(e) => setUserBranch(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserServiceType">
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Active/Reserve/Guard"
                  value={userServiceType}
                  onChange={(e) => setUserServiceType(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserRank">
                <Form.Label>Rank</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SrA / 1Lt"
                  value={userRank}
                  onChange={(e) => setUserRank(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserGrade">
                <Form.Label>Pay Grade</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="E-4 / O-2"
                  value={userGrade}
                  onChange={(e) => setUserGrade(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
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
              <Form.Group className="w-25">
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
