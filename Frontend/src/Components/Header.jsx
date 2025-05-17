import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header style={{ padding: "10px", backgroundColor: "#333", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <div style={{ fontWeight: "bold" }}>Mini Project</div>
      <nav>
        <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>Home</Link>
        {!isAuthenticated && <Link to="/login" style={{ margin: "0 10px", color: "#fff" }}>Login</Link>}
        <Link to="/contactus" style={{ margin: "0 10px", color: "#fff" }}>ContactUs</Link>
        {isAuthenticated && <Link to="/products" style={{ margin: "0 10px", color: "#fff" }}>List Product</Link>}
        {isAuthenticated && <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
