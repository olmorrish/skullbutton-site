import styled from "styled-components";
import colors from "./colors";

export const SectionHeader = styled.h2`
  color: ${colors.textPrimary};
  font-family: "Anonymous Pro";
  font-weight: 700;
  font-size: 25pt;
  padding: 0px 35px 0px;
`;

export const TextBlock = styled.p`
  color: ${colors.textPrimary};
  font-family: "Anonymous Pro";
  font-weight: 700;
  font-size: 12pt;
  padding: 0px 35px 0px;
`;

export const BoldText = styled.b`
  color: ${colors.textPrimary};
  font-family: "Anonymous Pro";
  font-weight: 700;
  font-size: 15pt;
  padding: 0px 10px 0px;
`;

export const Link = styled.a`
  color: ${colors.textPrimary};
  font-family: "Anonymous Pro";
  font-weight: 400;
  font-size: 20pt;

  &:hover {
    cursor: pointer;
    color: ${colors.textLinkOnHover};
  }

  &:active {
    color: ${colors.textLinkOnClick};
  }
`;
