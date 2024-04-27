import { styled } from "styled-components";
import colors from "../../resources/colors";
import MobileNavMenuButton from "./MobileNavMenuButton";
import { useState } from "react";

const Text = styled.b`
  color: black;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const Header = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: ${colors.navBarPrimary};
`;

const MobileNavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMenuButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Header>
      <MobileNavMenuButton
        expanded={expanded}
        handleMenuButtonClick={handleMenuButtonClick}
      />
    </Header>
  );
};

export default MobileNavBar;
