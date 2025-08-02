import { useState } from "react";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

// Simple routing system without React Router
export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState("home");

  const navigate = (route) => {
    setCurrentRoute(route);
  };

  const renderRoute = () => {
    switch (currentRoute) {
      case "home":
        return <Home />;
      case "profile":
        return <Profile />;
      case "checkout":
        return <Checkout />;
      default:
        return <Home />;
    }
  };

  return {
    currentRoute,
    navigate,
    renderRoute,
  };
};

// Route constants
export const ROUTES = {
  HOME: "home",
  PROFILE: "profile",
  CHECKOUT: "checkout"
};

// Navigation component
export const Navigation = ({ navigate, currentRoute }) => {
  return (
    <nav className="d-flex gap-3 p-3 bg-light">
      <button 
        className={`btn ${currentRoute === ROUTES.HOME ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => navigate(ROUTES.HOME)}
      >
        Home
      </button>
      <button 
        className={`btn ${currentRoute === ROUTES.PROFILE ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => navigate(ROUTES.PROFILE)}
      >
        Profile
      </button>
      <button 
        className={`btn ${currentRoute === ROUTES.CHECKOUT ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => navigate(ROUTES.CHECKOUT)}
      >
        Checkout
      </button>
    </nav>
  );
};
