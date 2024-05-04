import { styled } from "styled-components";
import BackLink from "../../components/BackLink";

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const GameContainer = styled.div`
  justify: center;
  align: center;
`;

const BackButtonContainer = styled.div`
  margin: 20px 50px 20px;
`;

// TODO all game pages need a back button
const EmbeddedGamePage = ({ content }) => {
  return (
    <div>
      <BackButtonContainer>
        <BackLink text="<games" route="/games"/>
      </BackButtonContainer>
      <GameContainer align="center">{content}</GameContainer>
    </div>
  );
};

export default EmbeddedGamePage;
