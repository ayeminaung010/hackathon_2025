import NewArrivalCard from "./NewArrivalCard";

export default function NewArrivalList({ products }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        overflowX: "auto",
      }}
    >
      {products.map((product, index) => (
        <NewArrivalCard
          key={index}
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}