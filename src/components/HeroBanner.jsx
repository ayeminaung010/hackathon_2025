import React from "react";

export default function HeroBanner() {
  const bannerStyle = {
    margin: "24px 16px",
    background: "linear-gradient(135deg, #1f2937 0%, #4b5563 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "white",
    position: "relative",
    overflow: "hidden",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const leftSectionStyle = {
    flex: "1",
  };

  const rightSectionStyle = {
    flex: "1",
    textAlign: "right",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const subtitleStyle = {
    fontSize: "14px",
    opacity: "0.9",
    marginBottom: "16px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#1f2937",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  };

  const dotsStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
    gap: "8px",
  };

  const dotStyle = (active = false) => ({
    width: "8px",
    height: "8px",
    backgroundColor: "white",
    borderRadius: "50%",
    opacity: active ? "1" : "0.5",
  });

  return (
    <div style={bannerStyle}>
      <div style={contentStyle}>
        <div style={leftSectionStyle}>
          <h2 style={titleStyle}>MODERN STYLE</h2>
          <p style={subtitleStyle}>Premium Collection</p>
          <button style={buttonStyle}>Shop Now</button>
        </div>
        <div style={rightSectionStyle}>
          <h3
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}
          >
            NEW SNEAKERS
          </h3>
          <p style={subtitleStyle}>Latest Arrivals</p>
        </div>
      </div>
      <div style={dotsStyle}>
        <div style={dotStyle(true)}></div>
        <div style={dotStyle()}></div>
        <div style={dotStyle()}></div>
      </div>
    </div>
  );
}
