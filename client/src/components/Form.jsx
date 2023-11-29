import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pg1UserProfile from "../forms/UserProfile/pg1.UserProfile";
import Button from "react-bootstrap/Button";
import Pg2UserProfile from "../forms/UserProfile/pg2.UserProfile";

const Form = ({ queue, profile }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const forms = queue;

  const pages = [<Pg1UserProfile />, <Pg2UserProfile />];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div>{queue[0]}</div>
      {pages[currentPage]}

      {currentPage > 0 && (
        <Button
          variant="primary"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Back
        </Button>
      )}

      {currentPage === pages.length - 1 ? (
        <Button variant="primary">Submit</Button>
      ) : (
        <Button variant="primary" onClick={handleNext}>
          Next
        </Button>
      )}
      <p>
        Page {currentPage + 1}/{pages.length}
      </p>
    </>
  );
};
export default Form;
