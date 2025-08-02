import image1 from "../../assets/one-item/image1.png";
import ProductHighlightCard from "./one-item-card";

export default function ProductHighlightContent() {
    const product = {
      name: "Nike Air Force",
      price: 1999,
      description:
        "Step into style with the iconic Nike Air Force 1. Timeless design meets all-day comfort — perfect for any outfit, any day.",
      img: image1,
    };
  
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <ProductHighlightCard
                img={image1}
                name="Nike Air Force"
                price={1999}
                description="Step into style with the iconic Nike Air Force 1. Timeless design meets all-day comfort — perfect for any outfit, any day."
            />
        </div>
    );
  }