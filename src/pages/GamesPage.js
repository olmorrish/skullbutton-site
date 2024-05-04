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

// TODO this is never passed the small prop, so we get a margin on small view
// practice: implement context so we can get mobile state?
const GameGridContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0px ${(props) => (props.small ? "0" : "125")}px 0px;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-flow: row | column | row dense | column dense;
  gap: 20px;
`;

const GamesPage = () => {
  return (
    <div justify="center" align="center">
      <header className="App-header">
        <LogoContainer src={sbi} className="App-logo" alt="logo" />
        <StudioName>Games</StudioName>
      </header>
      <GameGridContainer id="game-grid-container">
        <GameGrid>
          {gameData.map((game) => (
            <GamePreviewButton
              key={game.title}
              route={`/games${game.routeSlug}`}
              gameTitle={game.title}
              image={game.image}
            />
          ))}
        </GameGrid>
      </GameGridContainer>
    </div>
  );
};

export default GamesPage;
