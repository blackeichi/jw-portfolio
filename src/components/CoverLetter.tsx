import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div<{ large: string }>`
  width: 95%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding: ${(props) => (props.large === "true" ? "5vh 20vh" : "5vh")};
  box-sizing: border-box;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  max-width: 1100px;
`;
const Text = styled.h1`
  font-family: "NotoSerifKRmed";
  color: rgba(0, 0, 0, 0.6);
  margin: 0.8vh 0;
  font-size: 2.5vh;
  line-height: 25px;
`;
const Title = styled.h1`
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
  font-size: 8vh;
  margin-bottom: 10px;
`;
const Index = styled.h1`
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: ${(props) => props.theme.pupleColr};
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  color: white;
  font-size: 40px;
  font-weight: 700;
`;

type Interface = {
  index: number;
  query: any;
  ans: string;
  twoans?: string;
  img?: string;
};

export const CoverLetter: React.FC<Interface> = ({
  index,
  query,
  ans,
  twoans,
  img,
}) => {
  const [screen, setScreen] = useState(window.outerWidth);
  const [large, setLarge] = useState("true");
  const handelResize = () => {
    setScreen(window.outerWidth);
    console.log(screen);
  };
  useEffect(() => {
    window.addEventListener("resize", handelResize);
    if (screen > 1000) {
      setLarge("true");
    } else if (screen <= 1000) {
      setLarge("false");
    }
    console.log(large);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, [large, screen]);

  return (
    <Box large={large}>
      <Title>{query} </Title>
      <Text>{ans}</Text>
      {twoans && <Text>{twoans}</Text>}
      <Index>{index}</Index>
    </Box>
  );
};
