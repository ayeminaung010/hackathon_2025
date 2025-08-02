import { useState } from "react";
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
};
