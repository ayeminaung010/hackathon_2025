export default function OrderCard({ brand, status, items, total, actionLabel }) {
  return (
    <div
      style={{
        background: "#f9fafb",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "1rem",
          marginBottom: "12px",
        }}
      >
        <div className="bi-shop" style={{ display: "flex", alignItems: "center" }}>
          <span>{brand}</span>
          <span style={{ marginLeft: "4px", color: "#999" }}>›</span>
        </div>
        <span style={{ color: "#3b82f6", fontSize: "0.9rem" }}>{status}</span>
      </div>

      {/* Items */}
      {items.map((item, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "64px",
              height: "auto",
              marginRight: "12px",
              borderRadius: "8px",
              background: "#fff",
            }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: "1rem" }}>{item.name}</div>
            <div style={{ fontSize: "0.95rem", color: "#444" }}>{item.price} ฿</div>
          </div>
        </div>
      ))}

                  {/* Footer */}
          <div
          style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "12px",
          }}
          >
          {/* Line above total */}
          <div
              style={{
              borderTop: "1px solid #ccc",
              margin: "8px 0",
              }}
          />

          {/* Total */}
          <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>
              Total ({items.length} item{items.length > 1 ? "s" : ""}) : {total} ฿
          </span>

          {/* Action button */}
          <div
              style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
              }}
          >
              <button
              style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#e2e6f8",
                  fontWeight: "500",
                  cursor: "pointer",
              }}
              >
              {actionLabel}
              </button>
          </div>
          </div>
    </div>
  );
}
