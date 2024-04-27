import sbi from "../resources/images/SBI3.png";
import GameWindow from "../GameWindow.js";
import { Button, Popover } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { styled } from "styled-components";
import LinesImage from "../resources/images/16x16_Lines.png";
import LinkButton from "../components/LinkButton.js";
import ResponsiveNavBar from "../navbar/ResponsiveNavBar.js";

const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${LinesImage}); /* Apply gradient background */
  background-repeat: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

// About, Social Links, Games, Other Work, Contact
const MainPage = () => {
  return (
    <div>
      <ResponsiveNavBar />
      <SectionContainer>
        <div justify="center" align="center">
          <header className="App-header">
            <LogoContainer src={sbi} className="App-logo" alt="logo" />
            <StudioName>Skullbutton Interactive</StudioName>
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
      </SectionContainer>
    </div>
  );
};

export default MainPage;
