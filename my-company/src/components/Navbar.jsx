import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav 
      style={{ 
        backgroundColor: "#333",  // Updated to backgroundColor
        padding: "10px",
        display: "flex",           // Added display property
        justifyContent: "center",  // Added justifyContent property
      }}
    >
      <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
      <Link to="/services" style={{ color: "white", margin: "10px" }}>Services</Link>
      <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

