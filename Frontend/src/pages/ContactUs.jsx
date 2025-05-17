import React from "react";

const ContactUs = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "3.5rem",
        marginBottom: "20px",
        fontWeight: "700",
        textShadow: "1.5px 1.5px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      Contact Us
    </h1>
    <p style={{ fontSize: "1.5rem", marginBottom: "10px", fontWeight: "600" }}>
      Email: rathod01md@gmail.com
    </p>
    <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
      Phone: +91-7666673998
    </p>
  </div>
);

export default ContactUs;
