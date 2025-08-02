
import image2 from "../assets/order/image2.png"; // update with correct path
import OrderCard from "../components/order-card";

export default function Receive() {
  const receiveOrders = [
    {
      brand: "Adidas",
      status: "To receive",
      items: [
        { name: "Forum Hit Cut", price: "4800 ฿", img: image2 }
      ],
      total: "4800",
      actionLabel: (
        <>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              fontWeight: 500,
              marginRight: "8px",
              cursor: "pointer",
            }}
          >
            Return/Refund
          </button>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            Order Received
          </button>
        </>
      )
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#e8edf4",
        padding: "16px",
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      {/* Top-right date and time */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          display: "flex",
          gap: "8px"
        }}
      >
        <span
          style={{
            background: "#dee2e6",
            padding: "4px 10px",
            borderRadius: "8px",
            fontSize: "14px"
          }}
        >
          Apr 1, 2025
        </span>
        <span
          style={{
            background: "#dee2e6",
            padding: "4px 10px",
            borderRadius: "8px",
            fontSize: "14px"
          }}
        >
          9:41 AM
        </span>
      </div>

      <h2 style={{ fontWeight: "bold", marginBottom: "16px", marginTop: "40px" }}>
        Orders to receive
      </h2>

      {receiveOrders.map((order, i) => (
        <OrderCard key={i} {...order} />
      ))}
    </div>
  );
}
