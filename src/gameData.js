import cardinal from "./resources/images/cardinal.png";
import yarb from "./resources/images/yarb.gif";
import byteSizedEnigma from "./resources/images/byteSizedEnigma.png";
import infiniteMonkeys from "./resources/images/infiniteMonkeys.gif";
import springChicken from "./resources/images/springChicken.gif";
import vscsii from "./resources/images/vscsii.png";
import bitcrush from "./resources/images/bitcrush.gif";
import bungeeBuster from "./resources/images/bungeeBuster.png";
import vscsi from "./resources/images/vscsi.png";
import austrodyumPrime from "./resources/images/austrodyumPrime.png";
import bombBot from "./resources/images/bombBot.png";
import gumShip from "./resources/images/gumShip.png";
import kusa from "./resources/images/kusa.png";
import liesInPurgatory from "./resources/images/liesInPurgatory.png";
import rhythmicIllusions from "./resources/images/rhythmicIllusions.png";
import spaceStormPizzaPanic from "./resources/images/spaceStormPizzaPanic.png";

const bombBotContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/2513536?color=6c5b3a"
    allowfullscreen=""
    width="436"
    height="328"
  >
    <a href="https://skullbutton.itch.io/bomb-bot">
      Play Bomb Bot (Prototype) on itch.io
    </a>
  </iframe>
);

const gumShipContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/1942079?color=00070e"
    allowfullscreen=""
    width="500"
    height="320"
  >
    <a href="https://skullbutton.itch.io/gumship">Play GumShip on itch.io</a>
  </iframe>
);

const kusaContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/2401893?color=743f39"
    allowfullscreen=""
    width="916"
    height="552"
  >
    <a href="https://skullbutton.itch.io/kusa">Play Kusa on itch.io</a>
  </iframe>
);

const liesInPurgatoryContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/4442767?color=12011d"
    allowfullscreen=""
    width="820"
    height="490"
  >
    <a href="https://skullbutton.itch.io/lies-in-purgatory">
      Play Lies in Purgatory on itch.io
    </a>
  </iframe>
);

const rhythmicIllusionsContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/4723569?color=022c34"
    allowfullscreen=""
    width="980"
    height="640"
  >
    <a href="https://skullbutton.itch.io/rhythmic-illusions-prototype">
      Play Rhythmic Illusions (Prototype) on itch.io
    </a>
  </iframe>
);

const spaceStormPizzaPanicContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed/694813"
    width="552"
    height="167"
  >
    <a href="https://klungore.itch.io/space-storm-pizza-panic">
      Space Storm Pizza Panic by Klungore, Hannah Ava Sloan, Skullbutton
      Interactive, BunnyChamber
    </a>
  </iframe>
);

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

const bungeeBusterContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/2607376?color=a1b6d1"
    allowfullscreen=""
    width="660"
    height="728"
  >
    <a href="https://klungore.itch.io/bungeebuster">
      Play Bungee Buster on itch.io
    </a>
  </iframe>
);

const vscsiContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/7627512?color=020f00"
    allowfullscreen=""
    width="980"
    height="640"
  >
    <a href="https://skullbutton.itch.io/vscs-i">Play VSCS-I on itch.io</a>
  </iframe>
);

const austrodyumPrimeContent = (
  <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/3409356?color=000000"
    allowfullscreen=""
    width="980"
    height="640"
  >
    <a href="https://skullbutton.itch.io/austrodyum-prime">
      Play Austrodyum Prime on itch.io
    </a>
  </iframe>
);

export const gameData = [
  {
    title: "VSCS-I",
    routeSlug: "/vscs-i",
    image: vscsi,
    embedded: true,
    content: vscsiContent,
    year: 2020,
    month: 6,
  },
  {
    title: "VSCS-II",
    routeSlug: "/vscs-ii",
    image: vscsii,
    embedded: false,
    year: 2024,
    month: 2,
  },
  {
    title: "Cardinal",
    routeSlug: "/cardinal",
    image: cardinal,
    embedded: true,
    content: cardinalContent,
    year: 2022,
    month: 1,
  },
  {
    title: "Infinite Monkeys",
    routeSlug: "/infinitemonkeys",
    image: infiniteMonkeys,
    embedded: true,
    content: infiniteMonkeysContent,
    year: 2021,
    month: 11,
  },
  {
    title: "BiTCRUSH",
    routeSlug: "/BiTCRUSH",
    image: bitcrush,
    embedded: false,
    year: 2021,
    month: 6,
  },
  {
    title: "Byte-Sized Enigma",
    routeSlug: "/enigma",
    image: byteSizedEnigma,
    embedded: true,
    content: byteSizedEnigmaContent,
    year: 2021,
    month: 6,
  },
  {
    title: "Spring Chicken",
    routeSlug: "/springchicken",
    image: springChicken,
    embedded: true,
    content: springChickenContent,
    year: 2021,
    month: 6,
  },
  {
    title: "YARB",
    routeSlug: "/YARB",
    image: yarb,
    embedded: true,
    content: yarbContent,
    year: 2023,
    month: 7,
  },
  {
    title: "Bungee Buster",
    routeSlug: "/bungeebuster",
    image: bungeeBuster,
    embedded: true,
    content: bungeeBusterContent,
    year: 2020,
    month: 8,
  },
  {
    title: "Austrodyum Prime",
    routeSlug: "/austrodyumprime",
    image: austrodyumPrime,
    embedded: true,
    content: austrodyumPrimeContent,
    year: 2021,
    month: 2,
  },
  {
    title: "Bomb Bot",
    routeSlug: "/bombbot",
    image: bombBot,
    embedded: true,
    content: bombBotContent,
    year: 2020,
    month: 7,
  },
  {
    title: "GumShip",
    routeSlug: "/gumship",
    image: gumShip,
    embedded: true,
    content: gumShipContent,
    year: 2020,
    month: 2,
  },
  {
    title: "Kusa",
    routeSlug: "/kusa",
    image: kusa,
    embedded: true,
    content: kusaContent,
    year: 2020,
    month: 4,
  },
  {
    title: "Lies in Purgatory",
    routeSlug: "/liesInPurgatory",
    image: liesInPurgatory,
    embedded: true,
    content: liesInPurgatoryContent,
    year: 2021,
    month: 9,
  },
  {
    title: "Rhythmic Illusions",
    routeSlug: "/rhythmicIllusions",
    image: rhythmicIllusions,
    embedded: true,
    content: rhythmicIllusionsContent,
    year: 2021,
    month: 11,
  },
  {
    title: "Space Storm Pizza Panic",
    routeSlug: "/spaceStormPizzaPanic",
    image: spaceStormPizzaPanic,
    embedded: true,
    content: spaceStormPizzaPanicContent,
    year: 2020,
    month: 7,
  },
];