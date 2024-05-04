import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { TextBlock } from "../resources/styles";

const GameInfoContainer = styled.div`
  display: inline-block; /*shrink to fit content*/
`;

const PreviewImage = styled.img`
  border: none;
  border-radius: 10px;
  width: 300px;

  &:hover {
    filter: grayscale(50%);
    transition: .5s ease;
    border: none;
    cursor: pointer;
  }

  &:active {
    filter: grayscale(100%);
  }
`;

const GamePreviewButton = ({ route, gameTitle, image }) => {
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
        <PreviewImage src={image} />
      </div>
      <TextBlock>{gameTitle}</TextBlock>
    </GameInfoContainer>
  );
};

export default GamePreviewButton;
