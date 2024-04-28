import { styled } from "styled-components";
import colors from "../../resources/colors";
import MobileNavMenuButton from "./MobileNavMenuButton";
import { useState } from "react";
import MobileNavItem from "./MobileNavItem";

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

const MobileNavItemList = styled.ul`
  background-color: ${colors.navBarPrimary} 
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  zIndex: 999; /* ensure the nav bar renders in front of other content */
`;

const MobileNavBar = ({navItems}) => {
  const [expanded, setExpanded] = useState(false);

  const handleMenuButtonClick = () => {
    setExpanded(!expanded);
  };

  // Close the menu if a selection is made
  const onNavigation = () => {
    setExpanded(false);
  }

  return (
    <Header>
      <MobileNavMenuButton
        expanded={expanded}
        handleMenuButtonClick={handleMenuButtonClick}
      />
      {expanded && (
        <MobileNavItemList>
          {navItems.map((navItem) => (
          <MobileNavItem
            key={navItem.title}
            title={navItem.title}
            route={navItem.route}
            onNavigation={onNavigation}
          />
        ))}
        </MobileNavItemList>
      )}
    </Header>
  );
};

export default MobileNavBar;
