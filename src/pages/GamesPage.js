import { Grid } from "antd";
import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";
import GamePreviewButton from "../components/GamePreviewButton";
import cardinal from "../resources/images/cardinal.png";

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

const GameGridContainer = styled.div`
  padding: auto 300px auto;
`;

const GamesPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <StudioName>Games</StudioName>
    </header>
    <GameGridContainer>
      <GamePreviewButton route="/games/cardinal" gameTitle="Cardinal" image={cardinal}/>
    </GameGridContainer>
  </div>
);

export default GamesPage;
