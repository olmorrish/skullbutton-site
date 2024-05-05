import { styled } from "styled-components";
import { PageHeader } from "../resources/styles";
import LinkButton from "../components/LinkButton.js";
import { BigLogo } from "../components/Logo";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const LinksPage = (
    <div justify="center" align="center">
    <header className="App-header">
      <BigLogo />
      <PageHeader>Links</PageHeader>
    </header>
    <ButtonContainer>
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
    </ButtonContainer>
  </div>
);

export default LinksPage;
