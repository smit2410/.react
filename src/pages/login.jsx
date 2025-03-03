import React from "react";


const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height of viewport
        width: "100vw", // Full width of viewport
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "350px",
          border: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#232f3e",
            marginBottom: "20px",
          }}
        >
          amazon
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Email or mobile phone number
          </label>
          <input
            type="text"
            style={{
              width: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#ffd814",
              border: "none",
              color: "black",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Continue
          </button>
        </div>
        <p style={{ fontSize: "12px", color: "#555", marginTop: "10px" }}>
          By continuing, you agree to Amazon's{" "}
          <a href="#" style={{ color: "#0066c0", textDecoration: "none" }}>
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" style={{ color: "#0066c0", textDecoration: "none" }}>
            Privacy Notice
          </a>
          .
        </p>
        <hr style={{ margin: "20px 0", borderColor: "#ddd" }} />
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#f3f3f3",
            border: "1px solid #ccc",
            color: "black",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
