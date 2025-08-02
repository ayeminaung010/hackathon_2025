import React, { useState } from "react";
import { Home, ShoppingCart, User, Search, Menu, Bell } from "lucide-react";

export default function TopNavBar() {
  const [cartCount, setCartCount] = useState(2);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const statusBarStyle = {
    backgroundColor: "#f3f4f6",
    padding: "8px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    color: "#6b7280",
    borderBottom: "1px solid #e5e7eb",
  };

  const headerStyle = {
    backgroundColor: "#3b82f6",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cartContainerStyle = {
    position: "relative",
  };

  const badgeStyle = {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#ef4444",
    color: "white",
    fontSize: "12px",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  };

  return (
    <div>

      {/* Main Header */}
      <div style={headerStyle}>
        {/* Profile Avatar */}
        <div style={avatarStyle}>
          <User color="#3b82f6" size={24} />
        </div>

        {/* Cart Icon with Badge */}
        <div style={cartContainerStyle}>
          <ShoppingCart color="white" size={24} />
          {cartCount > 0 && <span style={badgeStyle}>{cartCount}</span>}
        </div>
      </div>
    </div>
  );
}
