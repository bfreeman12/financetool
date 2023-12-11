import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CountrySelector from "../../components/CountrySelector";
import { FormContext } from "../../formcontext/form.context";

const Pg1UserProfile = () => {
  return (
    <FormContext.Consumer>
      {(value) => {
        const {
          firstName,
          setFirstName,
          lastName,
          setLastName,
          middleInitial,
          setMiddleInitial,
          dob,
          setDob,
          address1,
          setAddress1,
          address2,
          setAddress2,
          city,
          setCity,
          homeState,
          setHomeState,
          country,
          setCountry,
          zipCode,
          setZipCode,
          email,
          setEmail,
          cellPhone,
          setCellPhone,
        } = value.userProfile;

        return (
          <Form>
            <h5>User Profile Information</h5>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUserLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={lastName}
                  type="Text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridMiddleName">
                <Form.Label>Middle Initial</Form.Label>
                <Form.Control
                  value={middleInitial}
                  type="text"
                  placeholder="Middle Initial"
                  onChange={(e) => setMiddleInitial(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUserEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Official Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formUserCell">
                <Form.Label>Cell Phone</Form.Label>
                <Form.Control
                  value={cellPhone}
                  type="tel"
                  autoComplete="tel"
                  placeholder="xxx-xxx-xxxx"
                  onChange={(e) => setCellPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formUserDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  value={dob}
                  type="date"
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formUserAddress1"
              >
                <Form.Label>Street</Form.Label>
                <Form.Control
                  value={address1}
                  autoComplete="address-line1"
                  type="text"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formUserAddress2"
              >
                <Form.Label>Unit / Apt / Suite</Form.Label>
                <Form.Control
                  value={address2}
                  autoComplete="address-line2"
                  type="text"
                  placeholder="Enter your unit/apt/suite"
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUserCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={city}
                  autoComplete="address-level2"
                  type="text"
                  placeholder="Enter your city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formUserState">
                <Form.Label>State/Province/Region</Form.Label>
                <Form.Control
                  value={homeState}
                  autoComplete="address-level1"
                  type="text"
                  placeholder="State/Province/Region"
                  onChange={(e) => setHomeState(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formUserZip">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  value={zipCode}
                  autoComplete="postal-code"
                  type="text"
                  placeholder="Enter your postal code"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formUserCountry">
                <CountrySelector country={country} setCountry={setCountry} />
              </Form.Group>
            </Row>
          </Form>
        );
      }}
    </FormContext.Consumer>
  );
};

export default Pg1UserProfile;
