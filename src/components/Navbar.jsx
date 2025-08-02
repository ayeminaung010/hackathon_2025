
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Dummy data for UI
  const date = "Apr 1, 2025";
  const time = "9:41 AM";
  return (
    <div style={{ background: "#222", color: "#888", fontSize: 16, padding: 4 }}>
      {/* <div style={{ background: "#f3f4f6", padding: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <input style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "2px 8px",
            marginRight: 8,
            fontSize: 14
          }} value={date} readOnly />
          <input style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "2px 8px",
            fontSize: 14
          }} value={time} readOnly />
        </div>
      </div> */}
      <div style={{ background: "#4a90e2", display: "flex", alignItems: "center", padding: "10px 20px", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, boxShadow: "0 2px 6px #0002" }}>
        <img src="https://i.imgur.com/4M34hi2.png" alt="logo" style={{ width: 38, height: 38, borderRadius: "50%", background: "#fff", marginRight: 10 }} />
        <span style={{ color: "#fff", fontWeight: 500, fontSize: 18, flex: 1 }}>SneakSpot</span>
        <Link to="/checkout" style={{ position: "relative" }}>
          <ShoppingCart color="#fff" size={28} />
          <span style={{ position: "absolute", top: -7, right: -7, background: "#e53935", color: "#fff", fontSize: 12, borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
            2
          </span>
        </Link>
      </div>
    </div>
  );
}

