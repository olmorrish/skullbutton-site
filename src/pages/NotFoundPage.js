import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";
import { PageHeader } from "../resources/styles";

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

const NotFoundPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <PageHeader>404 Not Found</PageHeader>
    </header>
  </div>
);

export default NotFoundPage;
