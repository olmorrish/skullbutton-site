import { styled } from "styled-components";
import { useEffect, useState } from "react";
import WebNavBar from "./WebNavBar";
import MobileNavBar from "./MobileNavBar";

const Text = styled.b`
  color: black;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const Header = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #252e2c;
`;

const tabletBreakpoint = 768;

// Renders mobile or web nav bar based on window width
const ResponsiveNavBar = () => {
  const [windowWidth, setWindowWidth] = useState(1000);

  const handleResize = () => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return windowWidth <= tabletBreakpoint ? <MobileNavBar /> : <WebNavBar />;
};

export default ResponsiveNavBar;
