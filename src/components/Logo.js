import bigLogoPng from "../resources/images/skullbuttonBig.png";
import tinySkullPng from "../resources/images/tinySkull.png";
import { styled } from "styled-components";

const BigLogoContainer = styled.img`
  margin: 20px;
`;

const TinySkullContainer = styled.img`
  margin: 2px;
`;

export const BigLogo = () => {
  return <BigLogoContainer src={bigLogoPng} className="App-logo" alt="logo" />;
};

export const TinySkull = () => {
  return (
    <TinySkullContainer src={tinySkullPng} className="App-logo" alt="logo" />
  );
};
