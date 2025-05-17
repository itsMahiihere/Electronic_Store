import React from "react";

const Home = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      textAlign: "center",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
      flexDirection: "column",
    }}
  >
    <h1
      style={{
        fontSize: "3.5rem",
        fontWeight: "700",
        textShadow: "1.5px 1.5px 4px rgba(0, 0, 0, 0.3)",
        marginBottom: "20px",
      }}
    >
      Welcome to My Store
    </h1>

    <p
      style={{
        fontSize: "1.3rem",
        maxWidth: "700px",
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        lineHeight: "1.6",
      }}
    >
      Discover amazing deals on your favorite products! 🛍️<br />
      Our store offers a wide range of quality items at unbeatable prices. Fast delivery, secure checkout, and
      100% customer satisfaction guaranteed. Whether you’re shopping for yourself or your loved ones, we’ve got something for everyone!
    </p>
  </div>
);

export default Home;
