import cardinal from "./resources/images/cardinal.png";
import yarb from "./resources/images/yarb.gif";
import byteSizedEnigma from "./resources/images/byteSizedEnigma.png";
import infiniteMonkeys from "./resources/images/infiniteMonkeys.gif";
import springChicken from "./resources/images/springChicken.gif";

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
    title: "Cardinal",
    routeSlug: "/cardinal",
    image: cardinal,
    content: cardinalContent,
  },
  {
    title: "YARB",
    routeSlug: "/yarb",
    image: yarb,
    content: yarbContent,
  },
  {
    title: "Byte-Sized Enigma",
    routeSlug: "/enigma",
    image: byteSizedEnigma,
    content: byteSizedEnigmaContent,
  },
  {
    title: "Infinite Monkeys",
    routeSlug: "/infinitemonkeys",
    image: infiniteMonkeys,
    content: infiniteMonkeysContent,
  },
  {
    title: "Spring Chicken",
    routeSlug: "/springchicken",
    image: springChicken,
    content: springChickenContent,
  },
];
