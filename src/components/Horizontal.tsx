import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { InfoContent } from "./InfoContent";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faCircleInfo,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

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
          name={true}
          one={"1995.06.13 / 28세"}
          two={"Tel : 010-9492-2246"}
          three={"Email : blackeichi@naver.com"}
          four={"Adress : 강원도 원주시 무실동"}
          icon={faCircleInfo}
          navi={"proposal"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"GRADUATION"}
          two={"2014 강릉원주대학교 정보통신공학과 입학"}
          three={"2019 강릉원주대학교 정보통신공학과 졸업"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"주요 기술"}
          one={"◾ JavaScript, ES6"}
          two={"◾ ReactJS"}
          three={"◾ React Native"}
          icon={faLayerGroup}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"자격증"}
          two={"2022 정보처리기사 자격증"}
          three={"2021 컴퓨터활용능력 1급"}
          four={"2020 토익 835"}
          icon={faCertificate}
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"GRADUATION"}
          two={"2014 강릉원주대학교 정보통신공학과 입학"}
          three={"2019 강릉원주대학교 정보통신공학과 졸업"}
        />
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};
