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

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div<{ large: string }>`
  width: 90%;
  height: 90vh;
  display: grid;
  grid-template-columns: ${(props) =>
    props.large === "large" ? "50% 50%" : "700px"};
  justify-content: center;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5vh;
  box-sizing: border-box;
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
    if (screen > 1300) {
      setLarge("large");
    } else if (1300 >= screen && screen > 800) {
      setLarge("med");
    } else if (screen <= 800) {
      setLarge("small");
    }
    return () => {
      window.removeEventListener("resize", handelResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <Container
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", delay: 0 }}
    >
      <Box large={large}>
        <Card>
          <Title>About Me</Title>
          <Photo src="img/???????????????.jpg" alt="???????????????" />
          <Profile large={large}>
            <IconBox icon={faUser} text={"?????????/(???)?????????"} title={"??????"} />
            <IconBox icon={faCalendar} text={"95.06.13"} title={"????????????"} />
            <IconBox
              icon={faLocationDot}
              text={"????????? ?????????(????????????)"}
              title={"??????"}
            />
            <IconBox icon={faPhone} text={"010-9492-2246"} title={"?????????"} />
            <IconBox
              icon={faAt}
              text={"blackeichi@naver.com"}
              title={"?????????"}
            />
            <IconBox
              icon={faPencil}
              text={"?????????????????????"}
              title={"?????? ??????"}
            />
          </Profile>
        </Card>
        <Image src="img/???????????????.jpg" alt="???????????????" />
      </Box>

      <HomeBtn />
    </Container>
  );
};
