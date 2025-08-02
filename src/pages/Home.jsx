import Ads from "../assets/Ads.png"; // adjust path if needed
import HotSaleList from "./home-components/hotsale-list";
import RecommendList from "./home-components/recommended-list";

export default function Home() {
    return (
      <div style={{ position: "relative", top: "100px" }}>
        <img
          src={Ads}
          alt="Advertisement"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        <h2 style={{ textAlign: "left", padding: "0 16px", marginTop: "24px" }}>
        Hot Sales
        </h2>

        <HotSaleList />

        <h2 style={{ textAlign: "left", padding: "0 16px", marginTop: "24px" }}>
        Recommend For You
        </h2>

        <RecommendList />

      </div>
    );
}