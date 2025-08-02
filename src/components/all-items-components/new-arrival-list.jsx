import image from "../../assets/new-arrival/image.png";
import NewArrivalCard from "./new-arrival-card";

export default function NewArrivalList() {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "16px", overflowX: "auto" }}>
      <NewArrivalCard img={image} name="Nike Terra Manta" price="฿4,700" />
      <NewArrivalCard img={image} name="Nike Nova Rise" price="฿3,599" />
    </div>
  );
}