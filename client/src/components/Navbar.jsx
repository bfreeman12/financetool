import "../styles/navbar.css";
import { useState } from "react";

function Navbar() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="navbar">
      <h1>Finance PDF filler outter</h1>
      {settingsOpen && <Settings />}
    </div>
  );
}

export default Navbar;
