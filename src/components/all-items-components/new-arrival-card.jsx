export default function NewArrivalCard({ img, name, price }) {
    return (
      <div
        style={{
          width: "160px",
          borderRadius: "16px",
          background: "#fff",
          boxShadow: "0 4px 18px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          color: "#000",
          flexShrink: 0,
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ padding: "12px", textAlign: "center" }}>
          <div style={{ color: "red", fontSize: "0.85rem", marginBottom: "6px" }}>
            New arrivals
          </div>
          <img
            src={img}
            alt={name}
            style={{
              width: "100%",
              height: "100px",
              objectFit: "contain"
            }}
          />
        </div>
  
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "10px",
            textAlign: "center"
          }}
        >
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: "700",
              marginBottom: "4px"
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: "600"
            }}
          >
            {price}
          </div>
        </div>
      </div>
    );
  }