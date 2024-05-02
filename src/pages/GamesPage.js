import { Grid } from "antd";
import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";
import GamePreviewButton from "../components/GamePreviewButton";

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

const GameGridContainer = styled.div`
  padding: 20px 300px 20px;
`;

const GamesPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <StudioName>Games</StudioName>
    </header>
    <GameGridContainer>
      <GamePreviewButton route="/games/cardinal" gameTitle="Cardinal"/>
    </GameGridContainer>
  </div>
);

export default GamesPage;
