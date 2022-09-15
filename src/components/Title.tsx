import React from "react";
import styled from "styled-components";

const TitleBox = styled.div<{ isLarge: boolean }>`
  text-align: ${(props) => (props.isLarge ? "start" : "center")};
  margin-bottom: 20px;
`;
const Text = styled.h1`
  font-size: 5.5vh;
  color: white;
  font-weight: 700;
  font-family: "NotoSerifKRbold";
`;

type TitleProps = {
  one: string;
  two: string;
  isLarge: boolean;
};

export const Title: React.FC<TitleProps> = ({ one, two, isLarge }) => {
  return (
    <TitleBox isLarge={isLarge}>
      <Text>{one}</Text>
      <Text>{two}</Text>
    </TitleBox>
  );
};
