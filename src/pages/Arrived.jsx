import React from 'react';
import OrderCard from "../components/OrderCard";
import PageHeader from "../components/PageHeader";
import BottomNavbar from "../components/BottomNavbar";

export default function Arrived() {
  const arrivedOrders = [
    {
      brand: "Nike",
      status: "Delivered",
      items: [
        { 
          name: "Air Max 270", 
          price: "3500 ฿", 
          img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" 
        }
      ],
      total: "3500",
      actionLabel: (
        <>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#10b981",
              color: "#fff",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              marginRight: "8px"
            }}
          >
            Rate Product
          </button>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Buy Again
          </button>
        </>
      )
    },
    {
      brand: "Adidas",
      status: "Delivered",
      items: [
        { 
          name: "Ultraboost 22", 
          price: "4200 ฿", 
          img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop" 
        }
      ],
      total: "4200",
      actionLabel: (
        <>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#10b981",
              color: "#fff",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              marginRight: "8px"
            }}
          >
            Rate Product
          </button>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Buy Again
          </button>
        </>
      )
    }
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
      <PageHeader title="Delivered Orders" />
      
      <div style={{ padding: "16px" }}>
        {arrivedOrders.length > 0 ? (
          arrivedOrders.map((order, i) => (
            <OrderCard key={i} {...order} />
          ))
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#666'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
            <h3 style={{ marginBottom: '8px', color: '#333' }}>No delivered orders yet</h3>
            <p>Your completed orders will appear here</p>
          </div>
        )}
      </div>
      
      <BottomNavbar />
    </div>
  );
}