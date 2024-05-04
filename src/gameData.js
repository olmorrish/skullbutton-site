import cardinal from "./resources/images/cardinal.png";
import yarb from "./resources/images/yarb.gif";
import byteSizedEnigma from "./resources/images/byteSizedEnigma.png";
import infiniteMonkeys from "./resources/images/infiniteMonkeys.gif";
import springChicken from "./resources/images/springChicken.gif";
import vscsii from "./resources/images/vscsii.png";
import bitcrush from "./resources/images/bitcrush.gif";

const cardinalContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/5065049?color=4f0b1c"
    allowfullscreen=""
    width="750"
    height="660"
  >
    <a href="https://skullbutton.itch.io/cardinal">Play Cardinal on itch.io</a>
  </iframe>
);

const yarbContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/8275108?color=000000"
    allowfullscreen=""
    width="512"
    height="532"
  >
    <a href="https://skullbutton.itch.io/yarb">Play YARB on itch.io</a>
  </iframe>
);

const byteSizedEnigmaContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed/1101496"
    width="552"
    height="167"
  >
    <a href="https://skullbutton.itch.io/byte-sized-enigma">
      Byte-Sized Enigma by Skullbutton Interactive
    </a>
  </iframe>
);

const infiniteMonkeysContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed/1281581"
    width="552"
    height="167"
  >
    <a href="https://skullbutton.itch.io/infinite-monkeys">
      Infinite Monkeys by Skullbutton Interactive
    </a>
  </iframe>
);

const springChickenContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed/1079108"
    width="552"
    height="167"
  >
    <a href="https://skullbutton.itch.io/spring-chicken">
      Spring Chicken by Skullbutton Interactive
    </a>
  </iframe>
);

export const gameData = [
  {
    title: "VSCS-II",
    routeSlug: "/vscs-ii",
    image: vscsii,
    embedded: false,
    year: 2024,
  },
  {
    title: "Cardinal",
    routeSlug: "/cardinal",
    image: cardinal,
    embedded: true,
    content: cardinalContent,
    year: 2022,
  },
  {
    title: "BiTCRUSH",
    routeSlug: "/BiTCRUSH",
    image: bitcrush,
    embedded: false,
    year: 2020,
  },
  {
    title: "Byte-Sized Enigma",
    routeSlug: "/enigma",
    image: byteSizedEnigma,
    embedded: true,
    content: byteSizedEnigmaContent,
    year: 2021,
  },
  {
    title: "Infinite Monkeys",
    routeSlug: "/infinitemonkeys",
    image: infiniteMonkeys,
    embedded: true,
    content: infiniteMonkeysContent,
    year: 2021,
  },
  {
    title: "Spring Chicken",
    routeSlug: "/springchicken",
    image: springChicken,
    embedded: true,
    content: springChickenContent,
    year: 2021,
  },
  {
    title: "YARB",
    routeSlug: "/YARB",
    image: yarb,
    embedded: true,
    content: yarbContent,
    year: 2023,
  },
];
