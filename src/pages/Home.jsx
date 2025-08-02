import HeroBanner from "../components/HeroBanner";
import MobileApp from "../components/MobileApp";
import ProductCard from "../components/ProductCard";
import TopNavBar from "../components/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <HeroBanner/>
      <ProductCard/>
      {/* <MobileApp/> */}
    </>
  );
}
