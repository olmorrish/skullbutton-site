import sbi from "../resources/images/SBI3.png";
import LinkButton from "../components/LinkButton.js";
import { styled } from "styled-components";
import { TextBlock, SectionHeader } from "../resources/styles.js";

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

//TODO add an H1, preferably styled
const AboutPage = (
  <div justify="center" align="center">
    <header className="App-header">
      <LogoContainer src={sbi} className="App-logo" alt="logo" />
      <StudioName>Skullbutton Interactive</StudioName>
    </header>
    <SectionHeader>About Me</SectionHeader>
    <TextBlock>
      Hi, I'm Oliver, and you've found my website. "Skullbutton" is a
      psuedo-screen-name and pseudo-studio-name under which I publish my games,
      which are often (but not always) solo projects.
    </TextBlock>
    <TextBlock>
      More about me: I'm a bundle of atoms and electrical impulses that has
      coalesced into something some people would call a "programmer" and the
      more generous would call a "writer".
    </TextBlock>
    <SectionHeader>About My Work</SectionHeader>
    <TextBlock>
      My contributions to the artistic landscape are a mish-mosh of hacked
      together prototypes, weird experimental games, and long branching
      narrative experiences. I try to use my background in theoretical computer
      science to inspire my work, which results in projects like a lo-fi Enigma
      machine simulator and an idle game about monkeys writing Shakespeare.
    </TextBlock>
    <TextBlock>I don't only create games, hence "Interactive". </TextBlock>
    <SectionHeader>Why a Skull?</SectionHeader>
    <TextBlock>
      Skulls have a bad reputation, probably because a bunch of
      less-than-savoury groups like to say "hey, death is cool, we cause a lot
      of that" and promptly adopt it without a second thought.
    </TextBlock>
    <TextBlock>
      Obviously the Skullbutton art is a reference to the Jolly Roger, and
      that's intentional. But it's more of an totem of digital freedom rather
      than nautical.
    </TextBlock>
    <TextBlock>
      But skulls? Everyone's got one. Nobody keeps it forever and it's with you
      for the whole ride. Your skull is a different shape from mine, but I'm
      certainly no phrenologist. I'm just happy you're here.
    </TextBlock>
    {/* <ButtonContainer>
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
    </ButtonContainer> */}
  </div>
);

export default AboutPage;
