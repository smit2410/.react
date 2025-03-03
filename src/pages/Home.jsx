import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Sample images for the hero section
const heroImages = [
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
];

const App = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchHover, setSearchHover] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div style={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
      {/* Primary Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0F1111",
          padding: "0 20px",
          width: "100%",
          height: "60px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <img
            src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png"
            alt="Amazon Logo"
            style={{ height: "35px", objectFit: "contain", cursor: "pointer" }}
          />
          {/* Sign In Button - Navigates to Login Page */}
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Hello, Sign In
          </Link>
        </div>

        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "14px",
            cursor: "pointer",
            transition: "color 0.3s ease",
            color: hoveredItem === "location" ? "#FFA41C" : "white",
          }}
          onMouseEnter={() => setHoveredItem("location")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          📍 Deliver to India
        </div>

        <div
          style={{
            display: "flex",
            flex: 2,
            maxWidth: "500px",
            margin: "0 10px",
          }}
        >
          <input
            type="text"
            placeholder="Search Amazon"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              border: "none",
              borderRadius: "5px 0 0 5px",
            }}
          />
          <button
            style={{
              padding: "8px 10px",
              border: "none",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              backgroundColor: searchHover ? "#FF8C00" : "#FFA41C",
            }}
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
          >
            🔍
          </button>
        </div>

        {["signin", "orders", "cart"].map((item) => (
          <div
            key={item}
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "14px",
              cursor: "pointer",
              transition: "color 0.3s ease",
              color: hoveredItem === item ? "#FFA41C" : "white",
            }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item === "signin" ? "Hello, Sign In" : item === "orders" ? "Orders" : "🛒 Cart"}
          </div>
        ))}
      </div>

      {/* Secondary Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#131921",
          padding: "10px 0",
          position: "fixed",
          top: "60px",
          width: "100%",
          zIndex: 999,
        }}
      >
        {["All", "Best Sellers", "Mobiles", "Electronics", "Fashion", "Home", "Customer Service", "Today's Deals"].map(
          (category) => (
            <div
              key={category}
              style={{
                color: "white",
                fontSize: "14px",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                backgroundColor: hoveredCategory === category ? "#232F3E" : "transparent",
              }}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {category}
            </div>
          )
        )}
      </div>

      {/* Hero Section */}
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 120px)",
          position: "relative",
          overflow: "hidden",
          marginTop: "120px",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          style={{ width: "100%", height: "100%" }}
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Centered Message Box */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "50%", // Adjust vertical position
                    left: "50%",
                    transform: "translate(-50%, 50%)", // Perfect centering
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 9999,
                    width: "auto",
                    whiteSpace: "nowrap", // 🚀 Forces message into one line
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span style={{ color: "#333" }}>
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    <a
                      href="https://www.amazon.in"
                      style={{
                        color: "#007185",
                        textDecoration: "none",
                        fontWeight: "bold",
                        marginLeft: "5px",
                      }}
                    >
                      Click here to go to amazon.in
                    </a>
                  </span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default App;
