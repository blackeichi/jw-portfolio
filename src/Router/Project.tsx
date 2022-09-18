import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoverLetter } from "../components/CoverLetter";
import { HomeBtn } from "../components/HomeBtn";
import { IntroPage } from "../components/IntroPage";
import { converletter } from "../utils/data";

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Project = () => {
  const [screen, setScreen] = useState(window.outerWidth);
  const [large, setLarge] = useState(true);
  const handelResize = () => {
    setScreen(window.outerWidth);
    console.log(screen);
  };
  useEffect(() => {
    window.addEventListener("resize", handelResize);
    if (screen > 1000) {
      setLarge(true);
    } else if (screen <= 1000) {
      setLarge(false);
    }
    console.log(large);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, [large, screen]);

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
            project={true}
            large={large}
            titleone="한정우"
            titletwo="PROJECTS"
            slide={true}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%" }}>
          <CoverLetter
            index={1}
            large={large}
            ans={converletter.ans[0]}
            query={converletter.query[0]}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%" }}>
          <CoverLetter
            index={2}
            large={large}
            ans={converletter.ans[1]}
            query={converletter.query[1]}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%" }}>
          <CoverLetter
            index={3}
            large={large}
            ans={converletter.ans[2]}
            query={converletter.query[2]}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%" }}>
          <CoverLetter
            index={4}
            large={large}
            ans={converletter.ans[3]}
            query={converletter.query[3]}
          />
        </SwiperSlide>
      </Swiper>
      <HomeBtn />
    </Container>
  );
};
