
import image1 from "../assets/order/image1.png";
import OrderCard from "../components/order-card";

export default function ToShip() {
  const shipOrders = [
    {
      brand: "Nike",
      status: "To ship",
      items: [
        { name: "Golden Glide", price: "1875 ฿", img: image1 }
      ],
      total: "1875",
      actionLabel: "Cancel/Refund"
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
        Orders to ship
      </h2>

      {shipOrders.map((order, i) => (
        <OrderCard key={i} {...order} />
      ))}
    </div>
  );
}