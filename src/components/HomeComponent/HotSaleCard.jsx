export default function HotSaleCard({ img, name, price }) {
  return (
    <div
      style={{
        minWidth: '120px',
        maxWidth: '160px',
        width: '40vw',
        padding: "14px 10px",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        color: "#000",
        flexShrink: 0,
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: "110px", // taller image
          objectFit: "cover",
          borderRadius: "16px",
          marginBottom: "10px",
        }}
      />

      <h2
        style={{
          fontSize: "0.9rem",
          fontWeight: "600",
          margin: "0 0 8px",
          lineHeight: "1.3",
        }}
      >
        {name}
      </h2>

      <h2
        style={{
          fontSize: "1rem",
          fontWeight: "700",
          margin: 0,
        }}
      >
        {price}
      </h2>
    </div>
  );
}