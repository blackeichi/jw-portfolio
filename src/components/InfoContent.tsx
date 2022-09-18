import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

type ContentType = {
  title: string;
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  icon?: any;
  name?: boolean;
  navi?: string;
};

export const ContentTitle = styled.h1<{ name?: boolean }>`
  font-family: "NotoSerifKRbold";
  color: ${(props) => props.theme.blueColr};
  font-size: ${(props) => (props.name ? "3vh" : "2.6vh")};
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  z-index: 1;
`;
const Iconbox = styled(motion.div)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;
export const Info = styled(motion.div)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2vh 0;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.h1`
  font-family: "NotoSerifKRmed";
  color: rgba(0, 0, 0, 0.6);
  margin: 0.8vh 0;
  font-size: 2vh;
`;

const boxAnime = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const InfoContent: React.FC<ContentType> = ({
  title,
  one,
  two,
  three,
  four,
  icon,
  name = false,
  navi,
}) => {
  const navigate = useNavigate();
  console.log(navi);
  const onClick = () => {
    navigate("/" + navi);
  };
  return (
    <Info
      variants={boxAnime}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <ContentTitle name={name}>{title}</ContentTitle>
      <Text>{one}</Text>
      <Text> {two}</Text>
      <Text>{three}</Text>
      <Text>{four}</Text>
      {icon ? (
        <Container>
          <Iconbox onClick={onClick} whileHover={{ scale: 1.2 }}>
            <FontAwesomeIcon color="#ffc93c" size="xl" icon={icon} />
          </Iconbox>
        </Container>
      ) : null}
    </Info>
  );
};
