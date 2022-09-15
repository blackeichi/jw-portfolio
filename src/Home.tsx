import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Title } from "./components/Title";
import { useNavigate } from "react-router-dom";

const Box = styled.div<{ isLarge: boolean }>`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isLarge ? "space-around" : "center")};
  align-items: ${(props) => (props.isLarge ? "flex-start" : "center")};
  padding: ${(props) => (props.isLarge ? "0 11vh" : "0 5vh")};
  gap: ${(props) => (props.isLarge ? "0" : "3vh")};
  box-sizing: border-box;
  color: white;
`;
const TopBox = styled.div``;
export const SubTitle = styled.h1`
  font-size: 2.5vh;
  font-weight: 700;
  margin-left: 5px;
`;
const BottomBox = styled.div<{ isLarge: boolean }>`
  margin-left: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isLarge ? "row" : "column")};
  text-align: ${(props) => (props.isLarge ? "start" : "center")};
  gap: ${(props) => (props.isLarge ? "0" : "3vh")};
  align-items: center;
`;

export const Home = () => {
  const [screen, setScreen] = useState(window.outerWidth);
  const [large, setLarge] = useState(true);
  const handelResize = () => {
    setScreen(window.outerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelResize);
    if (screen > 800) {
      setLarge(true);
    } else if (screen <= 800) {
      setLarge(false);
    }
    console.log(large);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  });
  const navigate = useNavigate();
  const onNext = () => {
    navigate(`/profile`);
  };
  return (
    <Box isLarge={large}>
      <TopBox>
        <Title
          isLarge={large}
          one="조직의 발전을 위해"
          two="끊임없이 노력하는 인재 한정우입니다."
        />
        {large ? <SubTitle>2021~2022 Portpolio</SubTitle> : null}
      </TopBox>
      <BottomBox isLarge={large}>
        <Contact />
        <motion.div
          onClick={onNext}
          whileHover={{ scale: 1.2 }}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon size="4x" icon={faHandPointRight} />
        </motion.div>
      </BottomBox>
    </Box>
  );
};
