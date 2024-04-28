import { styled } from "styled-components";
import colors from "../../resources/colors";
import { useNavigate } from "react-router-dom";
import { BoldText } from "../../resources/styles";

// Spacing + horizontal styling
const NavItemContainer = styled.li`
  display: inline;
  margin-right: 0px;
  height: 90bh
`;

const NavItemButton = styled.button`
  height: 10vh;
  width: 100vw;
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
    transform: translateX(1px);
    background-color: ${colors.navBarButtonOnClick};
    border: none;
  }
`;

const MobileNavItem = ({ title, route, onNavigation }) => {
  const navigate = useNavigate();
  return (
    <NavItemContainer>
      <NavItemButton
        role="button"
        onClick={() => {
          navigate(route);
          onNavigation();
        }}
      >
        <BoldText>{title}</BoldText>
      </NavItemButton>
    </NavItemContainer>
  );
};

export default MobileNavItem;
