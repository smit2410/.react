import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      maxWidth: "250px",
      textAlign: "center",
      backgroundColor: "white",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }}>
      <img
        src={product.images[0]}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.name}</h3>
      <p style={{ fontSize: "14px", color: "#007185" }}>{product.category}</p>
      <p style={{ fontWeight: "bold", fontSize: "16px" }}>${product.price}</p>
      <p style={{ fontSize: "12px", color: "#555" }}>{product.description}</p>
      <button
        style={{
          backgroundColor: "#FFA41C",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default ProductCard;
