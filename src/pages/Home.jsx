import Ads from "../assets/Ads.png"; // adjust path if needed
import HotSaleList from "./home-components/hotsale-list";
import RecommendList from "./home-components/recommended-list";

import TopNavBar from "../components/TopNavBar";

export default function Home() {
<<<<<<< HEAD
  return (
    <>
      {/* <TopNavBar /> */}
      {/* <HeroBanner/>
      <ProductCard/> */}
      {/* <MobileApp/> */}
      {/* <HotSaleCard/> */}
    </>
  );
}
=======
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
>>>>>>> 4c22826469033a9458b9a174b55010c15e43cf61
