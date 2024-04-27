import sbi from "../resources/images/SBI3.png";
import { styled } from "styled-components";
import LinesImage from "../resources/images/16x16_Lines.png";
import LinkButton from "../components/LinkButton.js";
import ResponsiveNavBar from "../navbar/ResponsiveNavBar.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${LinesImage}); /* Apply gradient background */
  background-repeat: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const StudioName = styled.h1`
  color: white;
  font-family: "Anonymous Pro";
  font-weight: 700;
`;

const LogoContainer = styled.img`
  margin: -20px -50px -50px -50px;
`;

const About = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <StudioName>Skullbutton Interactive</StudioName>
    </header>
    <ButtonContainer>
      <LinkButton
        name="itch.io"
        content="Portfolio site on itch.io. Most games are playable in a browser."
        onClick={() => {
          window.open("http://www.skullbutton.com", "_blank");
        }}
      />
      <LinkButton
        name="VSCS-II"
        content="A game about privacy, security, and AI."
        onClick={() => {
          window.open(
            "https://store.steampowered.com/app/1528590/VSCSII/",
            "_blank"
          );
        }}
      />
    </ButtonContainer>
  </div>
);
const Links = <div>Services Page</div>;
const Games = <div>Services Page</div>;
const OtherWork = <div>Services Page</div>;
const Contact = <div>Contact Page</div>;
const NotFound = <div>NOT FOUND</div>;

const MainPage = () => {
  return (
    <Router>
      <ResponsiveNavBar />
      <SectionContainer>
        <Routes>
          <Route exact path="/" element={<Navigate to="/about" />}/>
          <Route exact from="/" to="/about" />
          <Route path="/about" element={About} />
          <Route path="/links" element={Links} />
          <Route path="/games" element={Games} />
          <Route path="/otherwork" element={OtherWork} />
          <Route path="/contact" element={Contact} />
          <Route path="*" element={NotFound} />
        </Routes>
      </SectionContainer>
    </Router>
  );
};

export default MainPage;
