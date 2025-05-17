import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom"; // ✅ import

const Products = () => {
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ get navigate function

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://localhost:7138/api/Products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch {
        setError("Unable to fetch products.");
      }
    };
    getProducts();
  }, [token]);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    navigate("/cart"); // ✅ navigate to cart page
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "700",
          textShadow: "1.5px 1.5px 4px rgba(0,0,0,0.3)",
        }}
      >
        List of Products
      </h2>
      {error && (
        <p
          style={{
            color: "#ff6b6b",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          {error}
        </p>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              padding: "15px",
              width: "220px",
              textAlign: "center",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              }}
            />
            <h4 style={{ margin: "10px 0", fontWeight: "600" }}>{product.name}</h4>
            <p style={{ fontWeight: "700", fontSize: "1.1rem" }}>₹ {product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                marginTop: "12px",
                background: "linear-gradient(90deg, #f6d365 0%, #fda085 100%)",
                border: "none",
                padding: "10px 20px",
                borderRadius: "25px",
                fontWeight: "600",
                color: "#333",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "linear-gradient(90deg, #fda085 0%, #f6d365 100%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "linear-gradient(90deg, #f6d365 0%, #fda085 100%)")
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
