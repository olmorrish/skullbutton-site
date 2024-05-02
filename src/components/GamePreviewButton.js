import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import cardinal from "../resources/images/cardinal.png";
import colors from "../resources/colors";
import { TextBlock } from "../resources/styles";

const GameInfoContainer = styled.div`
  display: inline-block; /*shrink to fit content*/
`;

const PreviewImage = styled.img`
  border: none;
  border-radius: 10px;

  &:hover {
    filter: grayscale(50%);
    border: none;
  }

  &:active {
    filter: grayscale(100%);
  }
`;

// TODO: a11y: is this a link or a button?
const GamePreviewButton = ({ route, gameTitle }) => {
  const navigate = useNavigate();
  return (
    <GameInfoContainer>
      <div
        role="link"
        alt={gameTitle}
        onClick={() => {
          navigate(route);
        }}
      >
        <PreviewImage src={cardinal} />
      </div>
      <TextBlock>{gameTitle}</TextBlock>
    </GameInfoContainer>
  );
};

export default GamePreviewButton;
