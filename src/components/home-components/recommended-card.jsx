export default function RecommendCard({ img, name, price }) {
    return (
      <div
        style={{
          width: "130px",
          padding: "10px",
          borderRadius: "18px",
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
            height: "85px",
            objectFit: "contain",
            marginBottom: "6px",
          }}
        />
  
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: "600",
            margin: "0 0 4px",
            lineHeight: "1.1",
          }}
        >
          {name}
        </h2>
  
        <h2
          style={{
            fontSize: "0.7rem",
            fontWeight: "500",
            margin: 0,
          }}
        >
          {price}
        </h2>
      </div>
    );
  }