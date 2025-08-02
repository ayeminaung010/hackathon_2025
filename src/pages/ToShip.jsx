import React from 'react';
import image1 from "../assets/order/image1.png";
import OrderCard from "../components/OrderCard";
import PageHeader from "../components/PageHeader";
import BottomNavbar from "../components/BottomNavbar";

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
        minHeight: "100vh",
        background: "#e8edf4",
        paddingBottom: "70px",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative"
      }}
    >
      <PageHeader title="Orders to Ship" />
      
      <div style={{ padding: "16px" }}>
        {shipOrders.map((order, i) => (
          <OrderCard key={i} {...order} />
        ))}
      </div>
      
      <BottomNavbar />
    </div>
  );
}