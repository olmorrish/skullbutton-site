import { TextBlock, SectionHeader } from "../resources/styles.js";
import { PageHeader } from "../resources/styles";
import { BigLogo } from "../components/Logo";

const AboutPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <BigLogo />
      <PageHeader>About</PageHeader>
    </header>
  </div>
);

export default AboutPage;
