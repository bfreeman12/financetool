import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PrivacyBanner = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Privacy Act Statement</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <b>AUTHORITY:</b> 37 USC § 403, Public Law 96-343, Privacy Act of 1974
          <br />
          <b>PURPOSE:</b> To start, adjust or terminate military member's
          entitlement to BAH or to provide required Entitlement Recertification
          or Dependency Determination / Redetermination or ESM start / stop for
          eligible members E6 and below assigned / terminating unaccompanied
          government quarters
          <br />
          <b>ROUTINE USE(S):</b> Information may be disclosed to the Internal
          Revenue Service for tax information on members Social Security
          Administration or tax deducted, Department of Veteran Affairs for
          education and group life insurance information, and the Department of
          Justice for investigating or prosecuting possible violations of the
          law, the American Red Cross for information concerning the needs of
          the member or dependents emergency situations, the Air Force or Space
          Force to determine needs of a member or dependents in emergency
          situations.
          <br />
          <b>DISCLOSURE:</b> Voluntary. However, failure to provide all
          information may result in non-payment of Basic Housing Allowance (BAH)
          <br />
          <b>SORN:</b> T7340, Defense Joint Military Pay System - Active
          Componenet, T7344, Defense Joint Military Pay System - Reserve
          Component
        </p>
        {/* Add more details about your privacy policy here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PrivacyBanner;
