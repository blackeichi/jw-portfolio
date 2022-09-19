import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Contact } from "./Contact";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const Box = styled.div<{ isLarge: string }>`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isLarge === "true" ? "space-around" : "center"};
  align-items: ${(props) =>
    props.isLarge === "true" ? "flex-start" : "center"};
  padding: ${(props) => (props.isLarge === "true" ? "0 11vh" : "0 5vh")};
  gap: ${(props) => (props.isLarge === "true" ? "0" : "3vh")};
  box-sizing: border-box;
  color: white;
`;
const TopBox = styled.div``;
export const SubTitle = styled.h1`
  font-size: 2.5vh;
  font-weight: 700;
  margin-left: 5px;
`;
const BottomBox = styled.div<{ isLarge: string }>`
  margin-left: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isLarge === "true" ? "row" : "column")};
  text-align: ${(props) => (props.isLarge === "true" ? "start" : "center")};
  gap: ${(props) => (props.isLarge === "true" ? "0" : "3vh")};
  align-items: ${(props) => (props.isLarge === "true" ? "flex-end" : "center")};
`;
const Btn = styled.h1`
  font-size: 2.5vh;
  font-weight: 700;
  font-family: "NotoSerifKRbold";
  background-color: ${(props) => props.theme.pupleColr};
  padding: 15px;
  border-radius: 20px;
  color: white;
`;
const Text = styled.h2`
  font-size: 2.5vh;
  font-weight: 700;
  font-family: "NotoSerifKRbold";
  margin-top: 10px;
`;
const Image = styled.img`
  width: 30vh;
`;
const SlideBox = styled(motion.div)<{ large: string }>`
  position: ${(props) => (props.large === "true" ? "absolute" : "flex")};
  right: 100px;
`;

type IntroInterface = {
  home?: boolean;
  cover?: boolean;
  project?: boolean;
  large?: string;
  titleone?: string;
  titletwo: string;
  slide?: boolean;
};

export const IntroPage: React.FC<IntroInterface> = ({
  home = false,
  cover = false,
  large = "true",
  project = false,
  titleone = "",
  titletwo = "",
  slide,
}) => {
  const navigate = useNavigate();
  const onNext = () => {
    navigate(`/profile`);
  };
  return (
    <Box isLarge={large}>
      <TopBox>
        <Title isLarge={large} one={titleone} two={titletwo} />
        {home && large === "true" ? (
          <SubTitle>2021~2022 Portpolio</SubTitle>
        ) : null}
      </TopBox>
      <BottomBox isLarge={large}>
        {home ? (
          <Contact />
        ) : cover ? (
          <div>
            <FontAwesomeIcon size="4x" icon={faEnvelope} />
            <Text># Cover Letter</Text>
          </div>
        ) : project ? (
          <>
            {large === "true" ? (
              <div>
                <Image src="/img/Languages.PNG" />
                <Text># My Projects</Text>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon icon={faListCheck} size={"4x"} />
              </div>
            )}
          </>
        ) : null}
        {home ? (
          <motion.div
            onClick={onNext}
            whileHover={{ scale: 1.2 }}
            style={{ cursor: "pointer" }}
          >
            <Btn>START</Btn>
          </motion.div>
        ) : (
          <div />
        )}
      </BottomBox>
      {slide ? (
        <SlideBox large={large}>
          <Text>
            SLIDE <FontAwesomeIcon icon={faArrowRight} />
          </Text>
        </SlideBox>
      ) : null}
    </Box>
  );
};
