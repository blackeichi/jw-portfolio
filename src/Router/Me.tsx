import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HomeBtn } from "../components/HomeBtn";
import { IconBox } from "../components/IconBox";
import {
  faAt,
  faCalendar,
  faLocationDot,
  faPencil,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled(motion.div)<{ large: string }>`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${(props) =>
    props.large === "large" ? "50% 40%" : "90%"};
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.large === "large" ? "0" : "10vh 0")};
`;
const Card = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
`;
const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.pupleColr};
  margin-bottom: 12vh;
`;
const Title = styled.h1`
  font-size: 20px;
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
`;

const Profile = styled.div<{ large: string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.large !== "large" ? " repeat(2, 1fr)" : " repeat(3, 1fr)"};
  justify-content: center;
  width: 80%;
  gap: 30px;
`;

export const Me = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      large={large}
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", delay: 0 }}
    >
      <Card>
        <Title>About Me</Title>
        <Photo src="/img/프로필사진.jpg" alt="프로필사진" />
        <Profile large={large}>
          <IconBox icon={faUser} text={"한정우/(구)한석희"} title={"이름"} />
          <IconBox icon={faCalendar} text={"95.06.13"} title={"생년월일"} />
          <IconBox icon={faLocationDot} text={"원주시 시청로"} title={"주소"} />
          <IconBox icon={faPhone} text={"010-9492-2246"} title={"연락처"} />
          <IconBox icon={faAt} text={"blackeichi@naver.com"} title={"이메일"} />
          <IconBox
            icon={faPencil}
            text={"강릉원주대학교"}
            title={"최종 학력"}
          />
        </Profile>
      </Card>
      <Image src="/img/개명증명서.jpg" alt="개명증명서" />
      <HomeBtn />
    </Container>
  );
};
