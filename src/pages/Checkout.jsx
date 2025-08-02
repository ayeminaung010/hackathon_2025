import React from 'react';
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';
// This is our main page component.
function Checkout() {
  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 42900,
      imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "AirPods Pro",
      price: 8900,
      imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 39900,
      imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      price: 13900,
      imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "iPad Air",
      price: 21900,
      imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop"
    }
  ];


  return (
    <div style={{ background: '#e9edf2', minHeight: '100vh', paddingBottom: 70 }}>
      <Navbar />
      <div style={{ padding: '24px 0 80px 0', maxWidth: 420, margin: '0 auto' }}>
        <h4 style={{ color: '#222', fontWeight: 600, margin: '18px 0 12px 24px', fontSize: 18 }}>Your Cart</h4>
        {cartItems.slice(0,2).map((item) => (
          <div key={item.id} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 6px #b5c6e04d',
            display: 'flex',
            alignItems: 'center',
            margin: '0 24px 18px 24px',
            padding: 12,
            border: '2px solid #d2e3f7',
            position: 'relative',
            minHeight: 80
          }}>
            <input type="checkbox" style={{ width: 26, height: 26, accentColor: '#4a90e2', marginRight: 14, marginLeft: 6 }} />
            <img src={item.imageUrl} alt={item.name} style={{ width: 64, height: 64, borderRadius: 12, objectFit: 'cover', marginRight: 18 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 16 }}>{item.name}</div>
              <div style={{ color: '#222', fontSize: 15, marginTop: 2 }}>{item.price.toLocaleString()} ฿</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 58, background: '#f9fafb', padding: '16px 0', boxShadow: '0 -2px 8px #0001', zIndex: 900, display: 'flex', justifyContent: 'center' }}>
        <button style={{ background: '#4a90e2', color: '#fff', borderRadius: 8, border: 'none', padding: '10px 32px', fontWeight: 600, fontSize: 17, boxShadow: '0 2px 8px #4a90e233' }}>
          Check Out
        </button>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Checkout;