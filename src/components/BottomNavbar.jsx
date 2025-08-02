import React from "react";
import { Home, ShoppingBag, User } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div style={{
      background: "#4a90e2",
      padding: "10px 0 0 0",
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      boxShadow: "0 -2px 8px #0002",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 58,
      zIndex: 1000
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff" }}>
        <Home size={26} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff" }}>
        <ShoppingBag size={26} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff" }}>
        <User size={26} />
      </div>
    </div>
  );
}

