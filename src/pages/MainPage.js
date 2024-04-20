import sbi from "../resources/images/SBI3.png";
import GameWindow from "../GameWindow";
import { Button, Popover } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { styled } from "styled-components";
import LinesImage from '../resources/images/16x16_Lines.png';

//   background: radial-gradient(circle, white, black);
// background-color: #3c3c3c;
const SectionContainer = styled.body`
  height: 100vh;
  width: 100vw;
  background-image: url(${LinesImage}); /* Apply gradient background */
  background-repeat: repeat;
  background-size: 1.5% 3%; /* Scale the image up to be twice its original size */
`;

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const Text = styled.text`
  color: black;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LogoContainer = styled.img`
  margin: auto -50px -50px -50px;
`;

const content = (
  <div>
    <p>Portfolio site on itch.io. Most games are playable in a browser.</p>
  </div>
);

const openItch = () => {
  window.open("http://www.skullbutton.com", "_blank");
};

const MainPage = () => {
  return (
    <SectionContainer>
      <div justify="center" align="center">
        <header className="App-header">
          <LogoContainer src={sbi} className="App-logo" alt="logo" />
          <StudioName>Skullbutton Interactive</StudioName>
        </header>
        <Popover content={content} title="itch.io">
          <Button shape="round" size="large" onClick={openItch}>
            <Text>itch.io</Text>
          </Button>
        </Popover>
      </div>
    </SectionContainer>
  );
};

export default MainPage;
