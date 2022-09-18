import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./utils/slide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { IntroPage } from "./components/IntroPage";
import { CoverLetter } from "./components/CoverLetter";
import { converletter } from "./utils/data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Container = styled.div`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(motion.div)`
  position: fixed;
  bottom: 70px;
  right: 70px;
  z-index: 1;
  width: 70px;
  height: 70px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Proposal = () => {
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
  });
  const navigate = useNavigate();
  return (
    <Container>
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
            large={large}
            titleone="한정우"
            titletwo="자기소개서"
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
        <Icon
          whileHover={{ backgroundColor: "#ffc93c" }}
          transition={{ duration: 0.1 }}
          onClick={() => {
            navigate("/profile");
          }}
        >
          <FontAwesomeIcon size="2x" color="white" icon={faHome} />
        </Icon>
      </Swiper>
    </Container>
  );
};
