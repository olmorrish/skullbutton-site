import { styled } from "styled-components";
import LinesImage from "./resources/images/16x16_Lines.png";
import ResponsiveNavBar from "./navbar/ResponsiveNavBar.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage.js";
import ContactsPage from "./pages/ContactPage.js";
import GamesPage from "./pages/GamesPage.js";
import HomePage from "./pages/HomePage.js";
import LinksPage from "./pages/LinksPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import OtherWorkPage from "./pages/OtherWorkPage.js";
import { gameData } from "./gameData.js";
import EmbeddedGamePage from "./pages/games/EmbeddedGamePage.js";

const SectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${LinesImage});
  background-repeat: cover;
`;

const App = () => {
  return (
    <Router>
      <ResponsiveNavBar />
      <SectionContainer>
        <Routes>
          <Route exact path="/" element={HomePage} />
          <Route path="/about" element={AboutPage} />
          <Route path="/links" element={LinksPage} />
          <Route path="/games" element={GamesPage} />
          {gameData.map((game) => (
            <Route
              key={game.title}
              path={`/games${game.routeSlug}`}
              element={EmbeddedGamePage} //TODO need to pass props to this next; generalize
            />
          ))}
          <Route path="/otherwork" element={OtherWorkPage} />
          <Route path="/contact" element={ContactsPage} />
          <Route path="*" element={NotFoundPage} />
        </Routes>
      </SectionContainer>
    </Router>
  );
};

export default App;
