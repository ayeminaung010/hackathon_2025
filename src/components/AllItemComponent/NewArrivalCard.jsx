export default function NewArrivalCard({ img, name, price }) {
  return (
    <div
      style={{
        width: "140px",
        borderRadius: "14px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        color: "#000",
        fontFamily: "system-ui, sans-serif",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "8px 8px 0", textAlign: "center" }}>
        <div style={{ color: "red", fontSize: "0.75rem", marginBottom: "2px" }}>
          New arrivals
        </div>
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "70px",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          borderTop: "1px solid #eee",
          padding: "6px 8px 8px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "0.8rem", fontWeight: "600", marginBottom: "2px" }}>
          {name}
        </div>
        <div style={{ fontSize: "0.78rem", fontWeight: "700" }}>{price}</div>
      </div>
    </div>
  );
}