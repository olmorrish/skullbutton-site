import { styled } from "styled-components";

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

const WebHeader = () => {
  return <Header />;
};

export default WebHeader;
