import React, { useState } from "react";
import "../styles/pdf.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import fetchPdf from "../function/apifetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const pdfList = {
  "2231 Direct Deposit Form": "2231 Direct Deposit Form.pdf",
  "DAF 594": "daf594.pdf",
  "DD 1351-2c": "DD 1351-2c.pdf",
  "DD Form 1561": "DD Form 1561.pdf",
  "DD Form 2560 Pay Advance": "DD FORM 2560 pay advance.pdf",
  "Lost Reciept Form": "Lost Receipt Form.pdf",
  "State of Legal Residence - DD Form 2058":
    "State of Legal Residence - DD Form 2058.pdf",
};

const PdfPage = () => {
  const [selectedPdfs, setSelectedPdfs] = useState([]);

  const handleCheckboxChange = (pdf) => {
    if (selectedPdfs.includes(pdf)) {
      setSelectedPdfs(selectedPdfs.filter((p) => p !== pdf));
    } else {
      setSelectedPdfs([...selectedPdfs, pdf]);
    }
  };

  const RenderPdf = () => {
    return Object.entries(pdfList).map(([key, value]) => (
      <li key={value} className="pdf-item">
        <input
          type="checkbox"
          id={value}
          checked={selectedPdfs.includes(value)}
          onChange={() => handleCheckboxChange(value)}
        />
        <label className="pdf-label" htmlFor={value}>
          {key}
        </label>
        <button className="pdf-button" onClick={() => fetchPdf(value)}>
          <FontAwesomeIcon className="fa-icon" icon={faCircleDown} />
        </button>
      </li>
    ));
  };
  return (
    <>
      <Navbar />
      <div className="content">
        <ul className="pdf-body">
          {Object.keys(pdfList).length > 0 ? <RenderPdf /> : "No PDFs Found"}
        </ul>
        <div className="button-group">
          <button onClick={() => setSelectedPdfs(Object.values(pdfList))}>
            Select All
          </button>
          <button onClick={() => setSelectedPdfs([])}>Clear All</button>

          {selectedPdfs.length > 0 ? (
            <Link className="link" to="/forms" state={{ data: selectedPdfs }}>
              <button>Start</button>
            </Link>
          ) : (
            <button disabled>Start</button>
          )}
        </div>
      </div>
    </>
  );
  z;
};

export default PdfPage;
