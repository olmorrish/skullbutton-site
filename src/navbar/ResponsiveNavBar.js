import { useEffect, useState } from "react";
import WebNavBar from "./web/WebNavBar.js";
import MobileNavBar from "./mobile/MobileNavBar.js";

const navItems = [
  {
    title: "About",
    onClick: () => console.log("Test"),
  },
  {
    title: "Links",
  },
  {
    title: "Games",
  },
  {
    title: "Other Work",
  },
  {
    title: "Contact",
  },
];

const tabletBreakpoint = 768;

// Renders mobile or web nav bar based on window width
const ResponsiveNavBar = () => {
  const [windowWidth, setWindowWidth] = useState(1000);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return windowWidth <= tabletBreakpoint ? (
    <MobileNavBar navItems={navItems} />
  ) : (
    <WebNavBar navItems={navItems} />
  );
};

export default ResponsiveNavBar;
