import { styled } from "styled-components";
import colors from "../../resources/colors";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Text = styled.b`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
  font-size: 15pt;
  padding: 0px 10px 0px;
`;

// Spacing + horizontal styling
const NavItemContainer = styled.li`
  display: inline-block;
  margin-right: 0px;
  height: 10vh;
`;

// TODO aside from min-width this is identical to the styling for the web nav buttons, make common
const NavItemButton = styled.button`
  height: 10vh;
  min-width: 20vw;
  background-color: ${colors.navBarPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.navBarButtonPrimary};
  cursor: pointer;

  &:hover {
    background-color: ${colors.navBarButtonSecondary};
    border: none;
  }

  &:active {
    transform: translateY(1px);
    background-color: ${colors.navBarButtonOnClick};
    border: none;
  }
`;

const MobileNavMenuButton = ({ expanded, handleMenuButtonClick }) => {
  return (
    <NavItemContainer>
      <NavItemButton
        role="button"
        onClick={handleMenuButtonClick}
        aria-expanded={expanded}
      >
        {expanded ? (
          <CloseOutlined
            style={{ fontSize: "15pt", color: colors.textPrimary }}
          />
        ) : (
          <MenuOutlined
            style={{ fontSize: "15pt", color: colors.textPrimary }}
          />
        )}
      </NavItemButton>
    </NavItemContainer>
  );
};

export default MobileNavMenuButton;
