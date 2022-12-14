import React from "react";
import styled from "styled-components";

const TitleBox = styled.div<{ isLarge: string }>`
  text-align: ${(props) => (props.isLarge === "true" ? "start" : "center")};
  margin-bottom: 20px;
`;
const Sub = styled.h1`
  font-size: 4vh;
  color: white;
  font-family: "NotoSerifKRbold";
`;
const Main = styled.h1`
  margin-top: 1.5vh;
  font-size: 10vh;
  color: white;
  font-family: "NotoSerifKRbold";
`;

type TitleProps = {
  one?: string;
  two: string;
  isLarge?: string;
};

export const Title: React.FC<TitleProps> = ({ one, two, isLarge = "true" }) => {
  return (
    <TitleBox isLarge={isLarge}>
      <Sub>{one}</Sub>
      <Main>{two}</Main>
    </TitleBox>
  );
};
