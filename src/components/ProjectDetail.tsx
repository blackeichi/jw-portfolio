import React from "react";
import styled from "styled-components";
import {
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCheck } from "../components/ProjectCheck";

const Container = styled.div<{ large?: string }>`
  width: 90%;
  background-color: white;
  border-radius: 20px;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  min-width: 540px;
  height: 90%;
  padding: ${(props) => (props.large !== "true" ? "5vh" : "0")};
  box-sizing: border-box;
`;
const Title = styled.h1`
  font-size: 5vh;
  font-family: "NotoSerifKRbold";
  margin: 5vh 0;
  color: ${(props) => props.theme.blueColr};
`;
const Box = styled.div<{ large: string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.large === "true" ? "40% 60%" : "100%"};
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 5vh;
  box-sizing: border-box;
`;
const Media = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Video = styled.video`
  width: 40vw;
  max-width: 250px;
  min-width: 200px;
  border-radius: 25px;
  display: flex;
`;
const ImageBox = styled.div<{ large: string }>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: ${(props) => (props.large === "true" ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 270px;
  max-height: 300px;
`;
const ContentBox = styled.div``;
const Text = styled.h2`
  font-family: "NotoSerifKRbold";
  color: rgba(0, 0, 0, 0.7);
  line-height: 20px;
  font-size: 2.2vh;
`;
const SubBox = styled.div`
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
type Interface = {
  title: string;
  image?: string[];
  video?: string;
  description: string;
  func?: string;
  git: string;
  url?: string;
  tec: string[];
  team?: string;
  large: string;
};
export const ProjectDetail: React.FC<Interface> = ({
  team = "??????",
  large = "true",
  image,
  title,
  video,
  description,
  git,
  url,
  tec,
  func,
}) => {
  return (
    <>
      {large === "true" ? (
        <Container large={large}>
          <Box large={large}>
            <Media>
              {video && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Video autoPlay={true} controls>
                    <source src={video} type="video/mp4" />
                  </Video>
                  <Text style={{ marginTop: "10px" }}>
                    ???????????? ???????????????.
                  </Text>
                </div>
              )}
              {image && (
                <ImageBox large={large}>
                  {image.map((img, index) => (
                    <Image key={index} src={img} />
                  ))}
                </ImageBox>
              )}
            </Media>
            <ContentBox>
              <Title>{title}</Title>
              <Text>{description}</Text>
              <SubBox>
                <ProjectCheck title={"??? ??????"} text={team} />
                {func && <ProjectCheck title={"?????? ??????"} text={func} />}
                {url && <ProjectCheck title={"URL"} text={url} />}
                <ProjectCheck title={"GitHub"} text={git} />
                <ProjectCheck title={"?????? ??????"} tec={tec} />
              </SubBox>
            </ContentBox>
          </Box>
        </Container>
      ) : (
        <Swiper
          direction={"vertical"}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Mousewheel]}
          mousewheel={true}
        >
          <SwiperSlide style={{ height: "100%" }}>
            <Container large={large}>
              <Media>
                {video && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Video autoPlay={true} controls>
                      <source src={video} type="video/mp4" />
                    </Video>
                    <Text style={{ marginTop: "10px" }}>
                      ???????????? ???????????????!
                    </Text>
                  </div>
                )}
                {image && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <ImageBox large={large}>
                      {image.map((img, index) => (
                        <Image key={index} src={img} />
                      ))}
                    </ImageBox>
                    <Text style={{ marginTop: "10px" }}>
                      ???????????? ???????????????!
                    </Text>
                  </div>
                )}
              </Media>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <ContentBox>
                <Title>{title}</Title>
                <Text>{description}</Text>
                <SubBox>
                  <ProjectCheck title={"??? ??????"} text={team} />
                  {func && <ProjectCheck title={"?????? ??????"} text={func} />}
                  {url && <ProjectCheck title={"URL"} text={url} />}
                  <ProjectCheck title={"GitHub"} text={git} />
                  <ProjectCheck title={"?????? ??????"} tec={tec} />
                </SubBox>
              </ContentBox>
            </Container>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};
