import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <p style={styles.description}>{product.description}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  price: {
    color: "#B12704",
    fontSize: "16px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    backgroundColor: "#FFD814",
    color: "black",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ProductCard;
