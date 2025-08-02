import item1 from "../../assets/hot-sale/item1.png";
import item2 from "../../assets/hot-sale/item2.png";
import item3 from "../../assets/hot-sale/item3.png";
import HotSaleCard from "./HotSaleCard";


const hotSaleItems = [
  { img: item1, name: "Nike Air Force", price: "฿1999" },
  { img: item2, name: "Adidas Alpha", price: "฿999" },
  { img: item3, name: "Puma Future", price: "฿1590" }
];

export default function HotSaleList() {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '16px', padding: '8px 0 8px 4px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Hide scrollbar for webkit browsers */}
      <style>{`
        .hot-sale-list::-webkit-scrollbar { display: none; }
      `}</style>
      {hotSaleItems.map((item, index) => (
        <HotSaleCard
          key={index}
          img={item.img}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}