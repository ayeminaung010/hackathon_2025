import React from 'react';
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';
import Cart from '../components/checkout_component/Cart';
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
      <div style={{ paddingTop: '20px' }}>
        <Cart items={cartItems} />
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Checkout;