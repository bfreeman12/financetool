import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FinanceForm from "./FinanceForm.jsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FinanceForm />
  </React.StrictMode>
);
