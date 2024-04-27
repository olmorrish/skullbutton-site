import { styled } from "styled-components";
import { useEffect, useState } from "react";
import WebHeader from "./HeaderWeb";
import MobileHeader from "./HeaderMobile";

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

const ResponsiveHeader = () => {
  const [windowWidth, setWindowWidth] = useState(1000);

  const handleResize = () => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return windowWidth <= tabletBreakpoint ? <MobileHeader /> : <WebHeader />;
};

export default ResponsiveHeader;
