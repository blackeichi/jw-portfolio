import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Horizontal } from "./components/Horizontal";
import { InfoContent } from "./components/InfoContent";
import { IntroTitle } from "./components/IntroTitle";
import { Vertical } from "./components/Vertical";

const Box = styled.div<{ isLarge: string }>`
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
`;
const Introduce = styled.div<{ isLarge: string }>`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: ${(props) =>
    props.isLarge === "small" ? "none" : "1px solid rgba(0, 0, 0, 0.2);"};
  padding-bottom: ${(props) => (props.isLarge === "large" ? "25vh" : "0")};
  padding-top: ${(props) => (props.isLarge === "large" ? "15vh" : "0")};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Picture = styled.div`
  width: 150px;
  height: 150px;
  background-color: gray;
  border-radius: 50%;
`;
const IntroContent = styled.h3`
  font-family: "NotoSerifKRmed";
  width: 90%;
  font-size: 1.6vh;
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
`;
export const Info = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5vh 0;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const Name = styled.h1`
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
  font-size: 2.7vh;
  margin-bottom: 10px;
`;
export const Text = styled.h1`
  font-family: "NotoSerifKRmed";
  color: rgba(0, 0, 0, 0.6);
  margin: 0.8vh 0;
  font-size: 1.6vh;
`;
export const ContentTitle = styled.h1`
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
  font-size: 2.2vh;
  margin-bottom: 10px;
`;
const Two = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  });
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/proposal`);
  };
  return (
    <Box isLarge={large}>
      <Introduce isLarge={large}>
        <Top>
          <Picture />
          <IntroTitle one={"성장하는"} two={"인재"} three={"한정우입니다."} />
        </Top>
        <IntroContent>
          "두려움 따윌 안고살기엔 우리의 삶은 너무 짧다. 내 인생을 살고 내가
          원하는 것을 쫒아라". <br />
          안녕하세요. React 기반의 프론트엔드 개발자를 꿈꾸는 한정우 입니다.
          저는 현재 대학교 조교로 일하고 있습니다. 비록 현재 저의 업무가 제가
          꿈꾸고 있는 개발자와는 관계가 없지만, 제 꿈을 이루기 위해서 저는
          주경야독을 하며 열심히 공부하고 있습니다. 새로운 일을 시작하기에
          늦다면 늦은 나이지만, 저는 누구보다 열심히 배우고 성장 할 자신이
          있습니다. 제가 가진 열정과 성실함으로 회사에 큰 도움이 되는 인재가
          되겠습니다.
        </IntroContent>
      </Introduce>
      {large === "large" ? (
        <Statement isLarge={large}>
          <One>
            <Info>
              <Name>한정우 /HanJeongWoo</Name>
              <Text>1995.06.13 / 28세</Text>
              <Text>Tel : 010-9492-2246</Text>
              <Text>Email : blackeichi@naver.com</Text>
              <Text>Adress : 강원도 원주시 무실동</Text>
            </Info>
            <InfoContent
              title={"GRADUATION"}
              two={"2014 강릉원주대학교 정보통신공학과 입학"}
              three={"2019 강릉원주대학교 정보통신공학과 졸업"}
            />
            <Info>
              <ContentTitle>주요 기술</ContentTitle>
              <Text>◾ JavaScript, ES6</Text>
              <Text>◾ ReactJS</Text>
              <Text>◾ React Native</Text>
            </Info>
          </One>
          <Two>
            <InfoContent
              title={"자격증"}
              two={"2022 정보처리기사 자격증"}
              three={"2021 컴퓨터활용능력 1급"}
              four={"2020 토익 835"}
            />
            <InfoContent
              title={"GRADUATION"}
              two={"2014 강릉원주대학교 정보통신공학과 입학"}
              three={"2019 강릉원주대학교 정보통신공학과 졸업"}
            />
            <InfoContent click={true} title={"자기소개서"} two={"더 보기..."} />
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
