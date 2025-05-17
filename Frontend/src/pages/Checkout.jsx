import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Checkout = () => {
  const { cart, dispatch } = useContext(CartContext);

  const totalCost = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.price * quantity;
  }, 0);

  const handleConfirm = () => {
    alert("🎉 Purchase Confirmed!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #667eea, #764ba2)", // same as Home
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: "16px",
          padding: "30px 40px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "20px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          🛒 Checkout
        </h2>

        {cart.length === 0 ? (
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#ffdede",
            }}
          >
            No products in cart.
          </p>
        ) : (
          <>
            <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "20px" }}>
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    marginBottom: "12px",
                    padding: "10px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <strong>{item.name}</strong> — ₹{item.price} ×{" "}
                  <span style={{ color: "#d4f88f" }}>{item.quantity || 1}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
              Total: <span style={{ color: "#90ee90" }}>₹{totalCost}</span>
            </h3>

            <button
              onClick={handleConfirm}
              style={{
                padding: "12px 24px",
                fontSize: "1rem",
                backgroundColor: "#32cd32",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#28a745")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#32cd32")}
            >
              ✅ Confirm Purchase
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
