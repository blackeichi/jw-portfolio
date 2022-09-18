import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1``;
const Text = styled.h1``;

type CheckInterface = {
  title: string;
  text?: string;
  tec?: string[];
};

export const ProjectCheck: React.FC<CheckInterface> = ({
  title,
  text,
  tec,
}) => {
  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faCheck} /> {title}
      </Title>
      <Text>{text}</Text>
    </Container>
  );
};
