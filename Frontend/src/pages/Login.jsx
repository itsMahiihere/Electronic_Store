import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7138/api/Login", {
        userId,
        password,
      });
      login(response.data.token);
      navigate("/products");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          padding: "30px",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#ffffffdd",
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(118, 75, 162, 0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#4b0082",
            textShadow: "1px 1px 3px rgba(118, 75, 162, 0.7)",
          }}
        >
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="userId"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              User ID
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#764ba2")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              color: "white",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(118, 75, 162, 0.4)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #764ba2, #667eea)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #667eea, #764ba2)")
            }
          >
            Submit
          </button>
          {error && (
            <p
              style={{
                color: "crimson",
                marginTop: "15px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
