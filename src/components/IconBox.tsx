import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 25px;
  font-size: 3vh;
  color: rgba(0, 0, 0, 0.7);
  align-items: flex-start;
  box-sizing: border-box;
`;
const Name = styled.h2`
  font-family: "NotoSerifKRbold";
  font-size: 3vh;
  margin-bottom: 10px;
`;
const Text = styled.h1`
  font-family: "NotoSerifKRmed";
  margin: 0.8vh 0;
  font-size: 2vh;
`;

type iconInterface = {
  icon: any;
  title: string;
  text: string;
};

export const IconBox: React.FC<iconInterface> = ({ icon, title, text }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      <div>
        <Name>{title}</Name>
        <Text>{text}</Text>
      </div>
    </Container>
  );
};
