import CartItem from "./CartItem";

export default function Cart({ items }) {
  return (
   <div className="container mt-4">
    <h4 className="mb-4">Shopping Cart ({items.length} items)</h4>
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <div className="mt-4 p-3 bg-light rounded">
      <div className="d-flex justify-content-between">
        <strong>Total: {items.reduce((sum, item) => sum + item.price, 0).toLocaleString()} ฿</strong>
      </div>
    </div>
  </div>
  );
}
