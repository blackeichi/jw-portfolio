import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContentTitle, Info, Name, Text } from "../Profile";
import { InfoContent } from "./InfoContent";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const swiperStyle = {
  display: "flex",
  justifyContent: "center",
  height: "80vh",
  alignItems: "center",
};

export const Vertical = () => {
  return (
    <Swiper
      style={swiperStyle}
      direction={"vertical"}
      slidesPerView={3}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Info>
          <Name>한정우 /HanJeongWoo</Name>
          <Text>1995.06.13 / 28세</Text>
          <Text>Tel : 010-9492-2246</Text>
          <Text>Email : blackeichi@naver.com</Text>
          <Text>Adress : 강원도 원주시 무실동</Text>
        </Info>
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"GRADUATION"}
          two={"2014 강릉원주대학교 정보통신공학과 입학"}
          three={"2019 강릉원주대학교 정보통신공학과 졸업"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Info>
          <ContentTitle>주요 기술</ContentTitle>
          <Text>◾ JavaScript, ES6</Text>
          <Text>◾ ReactJS</Text>
          <Text>◾ React Native</Text>
        </Info>
      </SwiperSlide>
      <SwiperSlide>
        <InfoContent
          title={"자격증"}
          two={"2022 정보처리기사 자격증"}
          three={"2021 컴퓨터활용능력 1급"}
          four={"2020 토익 835"}
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
        <InfoContent click={true} title={"자기소개서"} two={"더 보기..."} />
      </SwiperSlide>
    </Swiper>
  );
};
