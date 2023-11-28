import React from "react";
import { Form, FormGroup } from "react-bootstrap";
function MemberCertificationComponent() {
  return (
    <div>
      <FormGroup>
        <Form.Check
          inline
          name="rateDependency"
          type="checkbox"
          id="divorceDecree"
          label={
            <span>
              I certify that I provide adequate support (see{" "}
              <a
                href="https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_26.pdf"
                target="_blank"
                rel="noreferrer"
              >
                DoD FMR Vol 7A, Chapter 26
              </a>
              ) for the dependents named above. I am aware that failure to
              adequately support the above named dependents will result in
              stopping BAH, and recouping allowances paid for any prior periods
              of nonsupport"
            </span>
          }
        />
      </FormGroup>
    </div>
  );
}

export default MemberCertificationComponent;
