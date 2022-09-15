import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const OneLine = styled.h2`
  font-size: 4vh;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 100;
  font-family: "NotoSerifKRlight";
`;
const TwoLine = styled.h1`
  font-size: 4.5vh;
  font-weight: 100;
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
`;
const ThreeLine = styled.h3`
  font-size: 4vh;
  font-weight: 500;
  font-family: "NotoSerifKRmed";
  color: rgba(0, 0, 0, 0.7);
`;

type TitleProp = {
  one: string;
  two: string;
  three?: string;
};

export const IntroTitle: React.FC<TitleProp> = ({ one, two, three }) => {
  return (
    <TextBox>
      <OneLine>{one}</OneLine>
      <TwoLine>{two}</TwoLine>
      {three ? <ThreeLine>{three}</ThreeLine> : null}
    </TextBox>
  );
};
