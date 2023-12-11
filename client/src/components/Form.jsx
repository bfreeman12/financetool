import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Pg1UserProfile from "../forms/UserProfile/pg1.UserProfile";
import Pg2UserProfile from "../forms/UserProfile/pg2.UserProfile";
import Pg1DirectDeposit from "../forms/DirectDeposit/pg1.DirectDeposit";
import Pg2DirectDeposit from "../forms/DirectDeposit/pg2.DirectDeposit";
import { FormContext } from "../formcontext/form.context";
import { fillPdfTemplate, downloadPdf } from "../function/processPdf";
import "../styles/form.css";

const Form = ({ queue, profile }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const context = useContext(FormContext);
  const forms = queue;

  const pages = [
    <Pg1UserProfile />,
    <Pg2UserProfile />,
    <Pg1DirectDeposit />,
    <Pg2DirectDeposit />,
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fillPdfTemplate(context);
  };

  return (
    <div className="form-content">
      <div className="current-form-label">{queue[0]}</div>
      <div className="current-form">{pages[currentPage]}</div>
      <div className="form-button-group">
        {currentPage > 0 && (
          <Button
            variant="secondary"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Back
          </Button>
        )}

        {currentPage === pages.length - 1 ? (
          <Button variant="secondary" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
      <div className="form-page-counter">
        <p>
          Page {currentPage + 1}/{pages.length}
        </p>
      </div>
    </div>
  );
};
export default Form;
