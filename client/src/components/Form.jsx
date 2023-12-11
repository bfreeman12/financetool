import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Pg1UserProfile from "../forms/UserProfile/pg1.UserProfile";
import Pg2UserProfile from "../forms/UserProfile/pg2.UserProfile";
import Pg1DirectDeposit from "../forms/DirectDeposit/pg1.DirectDeposit";
import Pg2DirectDeposit from "../forms/DirectDeposit/pg2.DirectDeposit";
import { FormContext } from "../formcontext/form.context";
import { fillDirectDepositForm } from "../function/processPdf";
import "../styles/form.css";

const Form = ({ queue, profile }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentForm, setCurrentForm] = useState(queue[0]);
  const context = useContext(FormContext);

  const formPages = {
    "2231 Direct Deposit Form.pdf": [
      <Pg1DirectDeposit />,
      <Pg2DirectDeposit />,
    ],
    "daf594.pdf": [<Pg1DirectDeposit />, <Pg2DirectDeposit />],
    "DD 1351-2c.pdf": [<Pg1DirectDeposit />, <Pg2DirectDeposit />],
    "DD Form 1561.pdf": [<Pg1DirectDeposit />, <Pg2DirectDeposit />],
    "DD FORM 2560 pay advance.pdf": [<Pg1UserProfile />, <Pg2DirectDeposit />],
    "Lost Receipt Form.pdf": [<Pg1DirectDeposit />, <Pg2DirectDeposit />],
    "State of Legal Residence - DD Form 2058.pdf": [
      <Pg1DirectDeposit />,
      <Pg2DirectDeposit />,
    ],
  };

  const pages = [
    <Pg1UserProfile />,
    <Pg2UserProfile />,
    ...queue.flatMap((form) => formPages[form] || []),
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fillDirectDepositForm("/pdf/2231 Direct Deposit Form.pdf", context);
  };

  useEffect(() => {
    const currentFormIndex = Math.floor(currentPage / 2);
    setCurrentForm(queue[currentFormIndex]);
  }, [currentPage, currentForm]);

  return (
    <div className="form-content">
      <div className="current-form-label">{currentForm}</div>
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
