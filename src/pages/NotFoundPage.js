import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

const NotFoundPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <StudioName>404 Not Found</StudioName>
    </header>
  </div>
);

export default NotFoundPage;
