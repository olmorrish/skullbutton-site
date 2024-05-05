import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";
import { TextBlock, SectionHeader } from "../resources/styles.js";
import { PageHeader } from "../resources/styles";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

const AboutPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <PageHeader>About</PageHeader>
    </header>
    {/* <ButtonContainer>
      <LinkButton
        name="itch.io"
        content="Portfolio site on itch.io. Most games are playable in a browser."
        onClick={() => {
          window.open("http://www.skullbutton.com", "_blank");
        }}
      />
      <LinkButton
        name="VSCS-II"
        content="A game about privacy, security, and AI."
        onClick={() => {
          window.open(
            "https://store.steampowered.com/app/1528590/VSCSII/",
            "_blank"
          );
        }}
      />
    </ButtonContainer> */}
  </div>
);

export default AboutPage;
