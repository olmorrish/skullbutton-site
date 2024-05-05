import { styled } from "styled-components";
import GamePreviewButton from "../components/GamePreviewButton";
import { gameData } from "../gameData";
import { PageHeader } from "../resources/styles";
import { BigLogo } from "../components/Logo";

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
        <BigLogo />
        <PageHeader id="header">Games</PageHeader>
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
