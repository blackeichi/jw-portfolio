import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FreeMode, Mousewheel, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectDetail } from "../components/ProjectDetail";
import { HomeBtn } from "../components/HomeBtn";
import { IntroPage } from "../components/IntroPage";
import { converletter, ProjectData } from "../utils/data";

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.blueColr};
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Project = () => {
  const [screen, setScreen] = useState(window.outerWidth);
  const [large, setLarge] = useState("false");
  useEffect(() => {
    const handelResize = () => {
      setScreen(window.outerWidth);
    };
    window.addEventListener("resize", handelResize);
    if (screen > 1000) {
      setLarge("true");
    } else if (screen <= 1000) {
      setLarge("false");
    }
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  });
  return (
    <Container
      initial={{ x: 1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Swiper
        style={{
          height: "100%",
        }}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide style={{ height: "100vh", width: "100vw" }}>
          <IntroPage
            project={true}
            large={large}
            titleone="한정우"
            titletwo="PROJECTS"
            slide={true}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", height: "100%", margin: 0 }}>
          <ProjectDetail
            title={ProjectData.DiaryApp.title}
            video={ProjectData.DiaryApp.video}
            description={ProjectData.DiaryApp.description}
            func={ProjectData.DiaryApp.function}
            git={ProjectData.DiaryApp.git}
            tec={ProjectData.DiaryApp.tec}
            large={large}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", height: "100%", margin: 0 }}>
          <ProjectDetail
            title={ProjectData.WatchaApp.title}
            video={ProjectData.WatchaApp.video}
            description={ProjectData.WatchaApp.description}
            func={ProjectData.WatchaApp.function}
            git={ProjectData.WatchaApp.git}
            tec={ProjectData.WatchaApp.tec}
            large={large}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", height: "100%", margin: 0 }}>
          <ProjectDetail
            title={ProjectData.Instagram.title}
            video={ProjectData.Instagram.video}
            description={ProjectData.Instagram.description}
            url={ProjectData.Instagram.url}
            git={ProjectData.Instagram.git}
            tec={ProjectData.Instagram.tec}
            large={large}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "85%", height: "100%", margin: 0 }}>
          <ProjectDetail
            title={ProjectData.MarvelHero.title}
            image={ProjectData.MarvelHero.image}
            description={ProjectData.MarvelHero.description}
            func={ProjectData.MarvelHero.function}
            url={ProjectData.MarvelHero.url}
            git={ProjectData.MarvelHero.git}
            tec={ProjectData.MarvelHero.tec}
            large={large}
          />
        </SwiperSlide>
      </Swiper>
      <HomeBtn />
    </Container>
  );
};
