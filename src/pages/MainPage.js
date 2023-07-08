import sbi from "../resources/images/SBI3.png";
import GameWindow from "../GameWindow";
import { styled } from "styled-components";

const PageSegment = styled.div`
  background-color: #3c3c3c;
  margins: 1 1 1 1;
`

const StudioName = styled.h1`
  color: white;
  margins: 1 1 1 1;
`

const MainPage = () => {
  return (
    <div>
      <header className="App-header">
        <img src={sbi} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="http://www.skullbutton.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio Link
        </a>
      </header>
      <PageSegment id="segment-1" >
        <StudioName>
          Skullbutton Interactive
        </StudioName>
      </PageSegment>
    </div>
  );
};

export default MainPage;
