import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Checkout from './pages/Checkout'
import Shop from "./pages/Shop";
import ToReceive from "./pages/ToReceive";
import ToShip from "./pages/Toship";
import Arrived from "./pages/Arrived";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/toship" element={<ToShip />} />
        <Route path="/toreceive" element={<ToReceive />} />
        <Route path="/arrived" element={<Arrived />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
