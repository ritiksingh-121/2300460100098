// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">All Notifications</Link>
      {" | "}
      <Link to="/priority">Priority Notifications</Link>
    </nav>
  );
}

export default Navbar;