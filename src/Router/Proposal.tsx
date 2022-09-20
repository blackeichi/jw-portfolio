/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../utils/slide.css";
import { IntroPage } from "../components/IntroPage";
import { CoverLetter } from "../components/CoverLetter";
import { converletter } from "../utils/data";
import { motion } from "framer-motion";
import { HomeBtn } from "../components/HomeBtn";

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Proposal = () => {
  return (
    <Container
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <IntroPage
            cover={true}
            titleone="한정우"
            titletwo="자기소개서"
            slide={true}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", paddingTop: "5vh" }}>
          <CoverLetter
            index={1}
            ans={converletter.ans[0]}
            query={converletter.query[0]}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", paddingTop: "5vh" }}>
          <CoverLetter
            index={2}
            ans={converletter.ans[1]}
            query={converletter.query[1]}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", paddingTop: "5vh" }}>
          <CoverLetter
            index={3}
            ans={converletter.ans[2]}
            twoans={converletter.ans[3]}
            query={converletter.query[2]}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", paddingTop: "5vh" }}>
          <CoverLetter
            index={4}
            ans={converletter.ans[4]}
            query={converletter.query[3]}
          />
        </SwiperSlide>
      </Swiper>
      <HomeBtn />
    </Container>
  );
};
