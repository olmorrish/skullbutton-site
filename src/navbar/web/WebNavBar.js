import { styled } from "styled-components";
import WebNavItem from "./WebNavItem";
import colors from "../../resources/colors.js";

const Text = styled.b`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const Header = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: ${colors.navBarPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const WebNavBar = ({ navItems }) => {
  return (
    <Header>
      <NavItemList>
        {navItems.map((navItem) => (
          <WebNavItem
            key={navItem.title}
            title={navItem.title}
            route={navItem.route}
          />
        ))}
      </NavItemList>
    </Header>
  );
};

export default WebNavBar;
