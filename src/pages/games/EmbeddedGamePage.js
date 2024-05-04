import { styled } from "styled-components";

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

// TODO all game pages need a back button, make this page generic and extensible
const EmbeddedGamePage = (
  <div>
    <div justify="center" align="center">
      <iframe
        frameborder="0"
        src="https://itch.io/embed-upload/5065049?color=4f0b1c"
        allowfullscreen=""
        width="750"
        height="660"
      >
        <a href="https://skullbutton.itch.io/cardinal">
          Play Cardinal on itch.io
        </a>
      </iframe>
    </div>
  </div>
);

export default EmbeddedGamePage;
