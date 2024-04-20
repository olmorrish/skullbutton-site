import sbi from "../resources/images/SBI3.png";
import GameWindow from "../GameWindow";
import { Button, Popover } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

const SectionContainer = styled.div`
  background-color: #3c3c3c;
  height: 100vh;
  width: 100vw;
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
    <p>Play video games.</p>
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
        <Popover content={content} title="Itch.io">
          <Button
            shape="round"
            size="large"
            onClick={openItch}
          >
            <Text>Itch.io</Text>
          </Button>
        </Popover>
      </div>
    </SectionContainer>
  );
};

export default MainPage;
