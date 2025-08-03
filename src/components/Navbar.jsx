import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo/sneakspot_Logo.png';

export default function Navbar() {
  return (
    <div
      style={{ background: "#222", color: "#888", fontSize: 16, padding: 4 }}
    >
      <div
        style={{
          background: "#4a90e2",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          boxShadow: "0 2px 6px #0002",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#fff",
            marginRight: 10,
          }}
        />
        <span style={{ color: "#fff", fontWeight: 500, fontSize: 18, flex: 1 }}>
          SneakSpot
        </span>
        <Link to="/checkout" style={{ position: "relative" }}>
          <ShoppingCart color="#fff" size={28} />
          <span
            style={{
              position: "absolute",
              top: -7,
              right: -7,
              background: "#e53935",
              color: "#fff",
              fontSize: 12,
              borderRadius: "50%",
              width: 18,
              height: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            2
          </span>
        </Link>
      </div>
    </div>
  );
}
