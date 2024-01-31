import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../formcontext/form.context";
function Navbar() {
  const { resetForm } = useContext(FormContext);
  const confirmExit = () => {
    if (window.confirm("Are you sure you want to leave this page?")) {
      resetForm();
      return true;
    }
    return false;
  };

  return (
    <div className="navbar">
      <h1>Finance Form Filler</h1>
      {window.location.pathname.includes("/forms") && (
        <Link className="link" to="/" onClick={confirmExit}>
          <button>Quit</button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
