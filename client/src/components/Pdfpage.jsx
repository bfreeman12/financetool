import React, { useState } from "react";
import "../styles/pdf.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const pdfList = [
  "DD Form 2875 DEAMS",
  "2231 Direct Deposit Form",
  "DAF 594",
  "DD 1351-2c",
  "DD Form 1561",
  "DD Form 2560 Pay Advance",
  "Lost Reciept Form",
  "State of Legal Residence - DD Form 2058",
];

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
    return pdfList.map((pdf) => (
      <li key={pdf}>
        <input
          type="checkbox"
          id={pdf}
          checked={selectedPdfs.includes(pdf)}
          onChange={() => handleCheckboxChange(pdf)}
        />
        <label htmlFor={pdf}>{pdf}</label>
      </li>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <ul className="pdf-body">
          {pdfList.length > 0 ? <RenderPdf /> : "no pdfs found"}
          <button onClick={() => setSelectedPdfs(pdfList)}>Select All</button>
          <button onClick={() => setSelectedPdfs([])}>Clear All</button>
          <Link to="/forms" state={{ data: selectedPdfs }}>
            Submit
          </Link>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PdfPage;
