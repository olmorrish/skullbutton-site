import { Grid } from "antd";
import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";
import GamePreviewButton from "../components/GamePreviewButton";
import { gameData } from "../gameData";

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
      {gameData.map((game) => (
          <GamePreviewButton
            key={game.title}
            route={`/games${game.routeSlug}`}
            gameTitle={game.title}
            image={game.image}
          />
        ))}
    </GameGridContainer>
  </div>
);

export default GamesPage;
