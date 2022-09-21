import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { HomeBtn } from "../components/HomeBtn";
import { Title } from "./Stack";

const Container = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vh;
  border-radius: 20px;
  padding: 20px 0;
  gap: 40px;
`;
const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Image = styled.img`
  width: 450px;
`;
const Text = styled.h2`
  font-family: "NotoSerifKRbold";
  font-size: 15px;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 15px;
  text-align: center;
  width: 150px;
`;

export const Certification = () => {
  return (
    <Container
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", delay: 0 }}
    >
      <Title>📃certificate</Title>
      <ImageBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>정보처리기사</Text>
          <Image src="img/정보처리기사.jpg" alt="정보처리기사" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>컴퓨터활용능력 1급</Text>
          <Image src="img/컴퓨터활용능력.jpg" alt="컴퓨터활용능력" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>토익</Text>
          <Image src="img/토익.jpg" alt="토익" />
        </div>
      </ImageBox>
      <HomeBtn />
    </Container>
  );
};
