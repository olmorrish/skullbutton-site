import { styled } from "styled-components";
import { TextBlock, SectionHeader } from "../resources/styles.js";
import { PageHeader } from "../resources/styles";
import { BigLogo } from "../components/Logo";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

//TODO add an H1, preferably styled
const AboutPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <BigLogo />
      <PageHeader>Skullbutton Interactive</PageHeader>
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
