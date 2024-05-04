import cardinal from "./resources/images/cardinal.png";
import yarb from "./resources/images/yarb.gif";

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
];
