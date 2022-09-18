import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { InfoContent } from "./InfoContent";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {
  faBookOpen,
  faCertificate,
  faCircleInfo,
  faLayerGroup,
  faProjectDiagram,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { converletter } from "../utils/data";

const swiperStyle = {
  display: "flex",
  justifyContent: "center",
  height: "40vh",
};
export const Horizontal = () => {
  return (
    <Swiper
      style={swiperStyle}
      direction={"horizontal"}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <InfoContent
          title={"한정우 /HanJeongWoo"}
          one={"1995.06.13 / 28세"}
          two={"Tel : 010-9492-2246"}
          three={"Email : blackeichi@naver.com"}
          four={"Adress : 강원도 원주시 무실동"}
          icon={faUserCircle}
          navi={"me"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"GRADUATION"}
          one={"2014 강릉원주대학교 정보통신공학과 입학"}
          two={"2019 강릉원주대학교 정보통신공학과 졸업"}
          three={"-"}
          four={"-"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"주요 기술"}
          one={"◾ JavaScript, ES6"}
          two={"◾ ReactJS"}
          three={"◾ React Native"}
          four={"◾ HTML, CSS"}
          icon={faLayerGroup}
          navi={"stack"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"자격증"}
          one={"2022 정보처리기사 자격증"}
          two={"2021 컴퓨터활용능력 1급"}
          three={"2020 토익 835"}
          four={"-"}
          icon={faCertificate}
          navi={"certify"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"PROJEJCT"}
          one={"◾ 포트폴리오 웹사이트"}
          two={"◾ 다이어리 안드로이드앱"}
          three={"◾ 왓챠 안드로이드앱"}
          four={"◾ MARVEL HERO 웹사이트 ..."}
          icon={faProjectDiagram}
          navi={"project"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"자기소개서"}
          one={`◾ ${converletter.query[0]}`}
          two={`◾ ${converletter.query[1]}`}
          three={`◾ ${converletter.query[2]}`}
          four={`◾ ${converletter.query[3]}`}
          icon={faBookOpen}
          navi={"proposal"}
        />
      </SwiperSlide>
    </Swiper>
  );
};
