import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            textAlign: "center",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          🛍️ Your Cart
        </h2>

        {cart.length === 0 ? (
          <p style={{ fontSize: "1.2rem", textAlign: "center", color: "#ffdede" }}>
            Your cart is empty.
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <span>
                  {item.name} - ₹{item.price}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            ))}

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleCheckout}
                style={{
                  marginTop: "20px",
                  padding: "12px 30px",
                  backgroundColor: "#32cd32",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#28a745")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#32cd32")}
              >
                ✅ Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
