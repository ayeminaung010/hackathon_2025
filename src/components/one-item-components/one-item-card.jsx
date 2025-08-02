export default function ProductHighlightCard({ img, name, price, description }) {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "system-ui, sans-serif",
        color: "#111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          width: "100%",
          height: "55vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={img}
          alt={name}
          style={{
            width: "120%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Text Section - No box, no background */}
      <div style={{ margin: "3px 1px 0 1px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "700" }}>{name}</h2>
          <span style={{ fontWeight: "700", fontSize: "1.1rem" }}>฿{price}</span>
        </div>
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
            margin: 0,
            color: "#333",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}