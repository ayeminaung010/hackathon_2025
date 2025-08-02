import Ads from "../assets/Ads.png"; // adjust path if needed
import BottomNavbar from "../components/BottomNavbar";
import HotSaleList from "../components/HomeComponent/HotSaleList";
import RecommendList from "../components/HomeComponent/RecommendList";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 12px', width: '100%' }}>
        <img
          src={Ads}
          alt="Advertisement"
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: 12
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
        <div style={{ height: 70 }} />
      </div>
      <BottomNavbar/>
    </>
  );
}

