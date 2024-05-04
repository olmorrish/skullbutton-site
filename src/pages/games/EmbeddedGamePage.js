import { styled } from "styled-components";

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const GameContainer = styled.div`
  justify: "center";
  align: "center";
`;

const BackButtonContainer = styled.div`
  margin: 10px 50px 50px;
`;

// TODO all game pages need a back button
const EmbeddedGamePage = ({ content }) => {
  return (
    <div>
      <GameContainer justify="center" align="center">
        {content}
      </GameContainer>
    </div>
  );
};

export default EmbeddedGamePage;
