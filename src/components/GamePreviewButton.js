import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { GameTitle } from "../resources/styles";

const GameInfoContainer = styled.div`
  justify-content: center;
`;

// TODO the height is set to make consistent along rows; switch to width of 300 on small view?
const PreviewImage = styled.img`
  border: none;
  border-radius: 10px;
  height: 250px;

  &:hover {
    filter: grayscale(50%);
    transition: 0.5s ease;
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
      <PreviewImage
        src={image}
        role="link"
        alt={gameTitle}
        onClick={() => {
          navigate(route);
        }}
      />
      <GameTitle>{gameTitle}</GameTitle>
    </GameInfoContainer>
  );
};

export default GamePreviewButton;
