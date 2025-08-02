import React from "react";
import { Home, ShoppingBag, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: ShoppingBag, path: "/shop", label: "Shop" },
    { icon: User, path: "/profile", label: "Profile" }
  ];

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
      {navItems.map(({ icon: Icon, path, label }) => (
        <div 
          key={path}
          onClick={() => navigate(path)}
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            color: isActive(path) ? "#fff" : "#b8d4f0",
            cursor: "pointer",
            padding: "4px 8px",
            borderRadius: "8px",
            backgroundColor: isActive(path) ? "rgba(255,255,255,0.1)" : "transparent",
            transition: "all 0.2s ease"
          }}
        >
          <Icon size={26} />
          <span style={{ fontSize: "10px", marginTop: "2px" }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

