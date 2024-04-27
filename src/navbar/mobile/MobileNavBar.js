import { styled } from "styled-components";
import colors from "../../resources/colors";

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
  return <Header />;
};

export default MobileNavBar;
