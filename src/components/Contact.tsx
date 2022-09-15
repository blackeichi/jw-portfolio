import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Text = styled.h2`
  font-size: 2.5vh;
  font-weight: 700;
  font-family: "NotoSerifKRbold";
`;

export const Contact = () => {
  return (
    <Box>
      <Text>CONTACT</Text>
      <Text>
        <FontAwesomeIcon icon={faEnvelope} /> blackeichi@naver.com
      </Text>
      <Text>
        <FontAwesomeIcon icon={faPhone} /> 010-9492-2246
      </Text>
    </Box>
  );
};
