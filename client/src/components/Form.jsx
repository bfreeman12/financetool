import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FormContext } from "../formcontext/form.context";
import "../styles/form.css";
import { fillDirectDepositForm } from "../function/ProcessPDF/processPdf";

import {
  Pg1UserProfile,
  Pg2UserProfile,
  Pg1DirectDeposit,
  Pg2DirectDeposit,
  Pg1BahApplication,
  Pg1LegalResidence,
  Pg2BahApplication,
  Pg3BahApplication,
  Pg1FsaApplication,
  Pg1TravelVoucher,
  Pg2TravelVoucher,
  Pg3TravelVoucher,
  Pg1PayAdvance,
  Pg2PayAdvance,
  Pg1LostReciept,
  Pg2LostReciept,
  Pg3LostReciept,
} from "../routes/routes";

const Form = ({ queue, profile }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentForm, setCurrentForm] = useState(queue[0]);
  const context = useContext(FormContext);

  const formPages = {
    "2231 Direct Deposit Form.pdf": [
      <Pg1DirectDeposit />,
      <Pg2DirectDeposit />,
    ],
    "daf594.pdf": [
      <Pg1BahApplication />,
      <Pg2BahApplication />,
      <Pg3BahApplication />,
    ],
    "DD 1351-2c.pdf": [
      <Pg1TravelVoucher />,
      <Pg2TravelVoucher />,
      <Pg3TravelVoucher />,
    ],
    "DD Form 1561.pdf": [<Pg1FsaApplication />],
    "DD FORM 2560 pay advance.pdf": [<Pg1PayAdvance />, <Pg2PayAdvance />],
    "Lost Receipt Form.pdf": [
      <Pg1LostReciept />,
      <Pg2LostReciept />,
      <Pg3LostReciept />,
    ],
    "State of Legal Residence - DD Form 2058.pdf": [<Pg1LegalResidence />],
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
    fillDirectDepositForm(queue, context);
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
