import { styled } from "styled-components";
import colors from "../../resources/colors";

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

const NavItemButton = styled.button`
  height: 10vh;
  min-width: 10vw;
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
    background-color: ${(props) =>
      props.primary ? "darkblue" : colors.navBarButtonOnClick};
    border: none;
  }
`;

const WebNavItem = ({ title, onClick }) => {
  return (
    <NavItemContainer>
      <NavItemButton role="button" onClick={onClick}>
        <Text>{title}</Text>
      </NavItemButton>
    </NavItemContainer>
  );
};

export default WebNavItem;
