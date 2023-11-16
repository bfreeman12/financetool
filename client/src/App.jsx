import "./app.css";
import PdfPage from "./components/Pdfpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";

function App() {
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
