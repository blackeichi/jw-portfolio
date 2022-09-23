import {
  faBookOpen,
  faCertificate,
  faCube,
  faLayerGroup,
  faProjectDiagram,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Horizontal } from "../components/Horizontal";
import { InfoContent } from "../components/InfoContent";
import { IntroTitle } from "../components/IntroTitle";
import { Vertical } from "../components/Vertical";
import { motion } from "framer-motion";
import { converletter } from "../utils/data";

const Box = styled(motion.div)<{ isLarge: string }>`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLarge === "large"
      ? "40% 60%"
      : props.isLarge === "med"
      ? "50% 50%"
      : "80%"};
  padding: 0 5vh;
  padding-top: 5vh;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  background-color: ${(props) => props.theme.blueColr};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Introduce = styled.div<{ isLarge: string }>`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  border-right: ${(props) =>
    props.isLarge === "med" ? "1px solid rgba(0, 0, 0, 0.2)" : "none"};
  padding-bottom: ${(props) => (props.isLarge === "small" ? "0" : "20vh")};
  padding-top: ${(props) => (props.isLarge === "small" ? "0" : "15vh")};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Picture = styled.img`
  width: 170px;
  height: 170px;
  background-color: gray;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.blueColr};
`;
const IntroContent = styled.h3`
  font-family: "NotoSerifKRmed";
  width: 90%;
  max-width: 500px;
  font-size: 2vh;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 5vh;
  line-height: 22px;
`;
const Statement = styled.div<{ isLarge: string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLarge === "large" ? "50% 50%" : "100%"};
  width: 90%;
  align-items: center;
  justify-content: center;
`;
const One = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

const Two = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const boxAnime = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const itemAnime = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const Profile = () => {
  const [screen, setScreen] = useState(window.outerWidth);
  const [large, setLarge] = useState<"large" | "med" | "small">("large");
  const handelResize = () => {
    setScreen(window.outerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelResize);
    console.log(large);
    if (screen > 1100) {
      setLarge("large");
    } else if (1100 >= screen && screen > 800) {
      setLarge("med");
    } else if (screen <= 800) {
      setLarge("small");
    }
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, [large, screen]);
  return (
    <Box
      animate={{ x: 0 }}
      exit={{ x: -1500 }}
      transition={{ duration: 0.5 }}
      isLarge={large}
    >
      {large ? (
        <Overlay
          variants={boxAnime}
          initial="visible"
          animate="hidden"
          transition={{ duration: 1.5 }}
        >
          <motion.div
            variants={itemAnime}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon color="white" size="6x" icon={faCube} />
          </motion.div>
        </Overlay>
      ) : null}

      <Introduce isLarge={large}>
        <Top>
          <Picture src="img/이력서사진.jpg" alt="이력서사진" />
          <IntroTitle one={"성장하는"} two={"인재"} three={"한정우입니다."} />
        </Top>
        <IntroContent>
          "두려움 따윌 안고살기엔 우리의 삶은 너무 짧다. 내 인생을 살고 내가
          원하는 것을 쫒아라". <br />
          안녕하세요. 프론트엔드 개발자를 꿈꾸는 한정우 입니다. 저는 현재 대학교
          조교로 일하고 있습니다. 비록 현재 저의 업무가 제가 꿈꾸고 있는
          개발자와는 관계가 없지만, 제 꿈을 이루기 위해서 저는 주경야독을 하며
          열심히 공부하고 있습니다. 새로운 일을 시작하기에 늦다면 늦은 나이지만,
          저는 누구보다 열심히 배우고 성장 할 자신이 있습니다. 제가 가진 열정과
          성실함으로 회사에 큰 도움이 되는 인재가 되겠습니다.
        </IntroContent>
      </Introduce>
      {large === "large" ? (
        <Statement isLarge={large}>
          <One>
            <InfoContent
              title={"한정우 /HanJeongWoo"}
              one={"1995.06.13 / 28세"}
              two={"Tel : 010-9492-2246"}
              three={"Email : blackeichi@naver.com"}
              four={"Adress : 강원도 원주시 무실동(이사 예정)"}
              icon={faUserCircle}
              navi={"me"}
            />
            <InfoContent
              title={"GRADUATION"}
              one={"2014 강릉원주대학교 정보통신공학과 입학"}
              two={"2019 강릉원주대학교 정보통신공학과 졸업"}
              three={"-"}
              four={"-"}
            />
            <InfoContent
              title={"주요 기술"}
              one={"◾ JavaScript, ES6"}
              two={"◾ ReactJS"}
              three={"◾ React Native"}
              four={"◾ HTML, CSS"}
              icon={faLayerGroup}
              navi={"stack"}
            />
          </One>
          <Two>
            <InfoContent
              title={"자격증"}
              one={"2022 정보처리기사 자격증"}
              two={"2021 컴퓨터활용능력 1급"}
              three={"2020 토익 835"}
              four={"-"}
              icon={faCertificate}
              navi={"certify"}
            />
            <InfoContent
              title={"PROJEJCT"}
              one={"◾ 포트폴리오 웹사이트"}
              two={"◾ 다이어리 안드로이드앱"}
              three={"◾ 왓챠 안드로이드앱"}
              four={"◾ MARVEL HERO 웹사이트 ..."}
              icon={faProjectDiagram}
              navi={"project"}
            />
            <InfoContent
              title={"자기소개서"}
              one={`◾ ${converletter.query[0]}`}
              two={`◾ ${converletter.query[1]}`}
              three={`◾ ${converletter.query[2]}`}
              four={`◾ ${converletter.query[3]}`}
              icon={faBookOpen}
              navi={"proposal"}
            />
          </Two>
        </Statement>
      ) : large === "med" ? (
        <Vertical />
      ) : (
        <Horizontal />
      )}
    </Box>
  );
};
