
import React from 'react';
function CartItem ({ item }) {
  return (
  <div className="product-card d-flex align-items-center bg-white p-3 rounded-4 mb-3 shadow-sm border">
    <div className="custom-checkbox me-3">
      <input type="checkbox" className="form-check-input" />
    </div>
    <img 
      src={item.imageUrl}
      alt={item.name} 
      className="product-image me-3 rounded" 
      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
    />
    <div className="flex-grow-1">
      <h6 className="fw-bold mb-1">{item.name}</h6>
      <p className="text-muted mb-0">{item.price.toLocaleString()} ฿</p>
    </div>
  </div>
  );
}

export default CartItem;