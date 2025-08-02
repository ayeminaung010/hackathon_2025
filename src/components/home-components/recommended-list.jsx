import image from "../../assets/recommended/image.png";
import image1 from "../../assets/recommended/image1.png";
import RecommendCard from "./recommended-card";

export default function RecommendList() {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px", // use 'px'
        padding: "16px 24px",
        justifyContent: "center",
      }}
    >
      <RecommendCard img={image} name="Nike Air Force" price="฿1999" />
      <RecommendCard img={image1} name="Nike Air Force" price="฿1999" />
    </div>
  );
}