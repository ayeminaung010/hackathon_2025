import image from "../assets/new-arrival/image.png";
import image1 from "../assets/new-arrival/image1.png";
import image2 from "../assets/new-arrival/image2.png";
import image3 from "../assets/new-arrival/image3.png";
import image4 from "../assets/new-arrival/image4.png";
import image5 from "../assets/new-arrival/image5.png";
import NewArrivalList from "../components/AllItemComponent/NewArrivalList";

export default function AllItem() {

    const nikeProducts = [
        { img: image, name: "Nike Terra Manta", price: "฿4,700" },
        { img: image1, name: "Nike Air Max Dn8", price: "฿6,500" },
      ];
    
      const adidasProducts = [
        { img: image2, name: "Campus 00s", price: "฿5,600" },
        { img: image3, name: "Forum Hi Cut", price: "฿4,800" },
      ];
    
      const newBalanceProducts = [
        { img: image4, name: "New Balance 530", price: "฿4,200" },
        { img: image5, name: "New Balance 574", price: "฿3,999" },
      ];
    
  
    return (
      <div className="all-item-container mb-5" style={{ padding: "16px", maxWidth: "480px", margin: "0 auto" }}>
        <h3 style={{ paddingLeft: "16px", textAlign: "left", marginBottom: "8px" }}>Nike</h3>
        <NewArrivalList products={nikeProducts} />

        <h3 style={{ paddingLeft: "16px", textAlign: "left", marginBottom: "8px" }}>Addidas</h3>
        <NewArrivalList products={adidasProducts} />

        <h3 style={{ paddingLeft: "16px", textAlign: "left", marginBottom: "8px" }}>NewBalance</h3>
        <NewArrivalList products={newBalanceProducts} />
       
      </div>
    );
  }