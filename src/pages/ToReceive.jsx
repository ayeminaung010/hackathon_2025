import React from 'react';
import image2 from "../assets/order/image2.png"; // update with correct path
import OrderCard from "../components/OrderCard";
import PageHeader from "../components/PageHeader";
import BottomNavbar from "../components/BottomNavbar";

export default function ToReceive() {
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
        minHeight: "100vh",
        background: "#e8edf4",
        paddingBottom: "70px",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative"
      }}
    >
      <PageHeader title="Orders to Receive" />
      
      <div style={{ padding: "16px" }}>
        {receiveOrders.map((order, i) => (
          <OrderCard key={i} {...order} />
        ))}
      </div>
      
      <BottomNavbar />
    </div>
  );
}
