export default function HotSaleCard({ img, name, price }) {
    return (
      <div
        style={{
          width: "120px",
          padding: "10px",
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 4px 18px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          color: "#000",
          flexShrink: 0,
          fontFamily: "sans-serif"
        }}
      >
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "90px",
            objectFit: "cover",
            borderRadius: "16px",
            marginBottom: "8px"
          }}
        />
  
        <h2
          style={{
            fontSize: "0.9rem",
            fontWeight: "600",
            margin: "0 0 6px",
            lineHeight: "1.2"
          }}
        >
          {name}
        </h2>
  
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            margin: 0
          }}
        >
          {price}
        </h2>
      </div>
    );
  }