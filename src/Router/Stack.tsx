import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { HomeBtn } from "../components/HomeBtn";
import { StackIcon } from "../components/StackIcon";

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh 0;
  box-sizing: border-box;
`;
export const Title = styled.h1`
  margin-top: 20px;
  font-size: 5vh;
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
  text-transform: uppercase;
`;
const Card = styled.div`
  background-color: white;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  max-width: 1000px;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 25px;
  padding: 5vh;
  box-sizing: border-box;
`;

export const Stack = () => {
  return (
    <Container
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Card>
        <Title>✍ SKILLS</Title>
        <Box>
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/html5_1IJr1hb.png"
            title="HTML"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/css3.png"
            title="CSS"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/JS.png"
            title="JavaScript"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/es6.png"
            title="ES6"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/React_Z6rkrgv.png"
            title="React"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript_psOTuYC.png"
            title="TypeScript"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/MongoDB_XriFIJg.png"
            title="Mongodb"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/React_Native_keMPfqD.png"
            title="React Native"
          />
          <StackIcon
            path="https://d1telmomo28umc.cloudfront.net/media/public/badges/Pug_TAaOtzg.png"
            title="PUG"
          />
          <StackIcon
            path="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sass_icon_130182.png"
            title="Sass"
          />
          <StackIcon
            path="https://recoiljs.org/ko/img/logo.svg"
            title="Recoil"
          />
          <StackIcon
            path="https://cdn.icon-icons.com/icons2/936/PNG/128/github-logo_icon-icons.com_73546.png"
            title="Github"
          />
          <StackIcon
            path="https://cdn.icon-icons.com/icons2/2699/PNG/128/heroku_logo_icon_169035.png"
            title="Heroku"
          />
        </Box>
      </Card>
      <HomeBtn />
    </Container>
  );
};
