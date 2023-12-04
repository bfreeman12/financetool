import "./app.css";
import PdfPage from "./pages/Pdfpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  return (
    <Router>
      <Routes>
        <Route index element={<PdfPage />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
