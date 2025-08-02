export default function RecommendCard({ img, name, price }) {
  return (
    <div
      style={{
        width: "150px",
        padding: "12px",
        borderRadius: "20px",
        background: "linear-gradient(to bottom, #6db1ff, #dbeafe)",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
        textAlign: "center",
        color: "#000",
        flexShrink: 0,
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: "100px",
          objectFit: "contain",
          marginBottom: "8px",
        }}
      />

      <h2
        style={{
          fontSize: "0.85rem",
          fontWeight: "600",
          margin: "0 0 6px",
          lineHeight: "1.2",
        }}
      >
        {name}
      </h2>

      <h2
        style={{
          fontSize: "0.8rem",
          fontWeight: "500",
          margin: 0,
        }}
      >
        {price}
      </h2>
    </div>
  );
}