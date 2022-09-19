import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const Title = styled.h1`
  display: flex;
  gap: 15px;
  font-family: "NotoSerifKRbold";
  align-items: center;
  font-size: 2.2vh;
  width: 140px;
`;
const Text = styled.h1<{ link?: boolean }>`
  font-family: "NotoSerifKRmed";
  color: rgba(0, 0, 0, 0.7);
  line-height: 20px;
  font-size: 2.2vh;
  cursor: ${(props) => (props.link ? "pointer" : "default")};
  text-decoration: ${(props) => (props.link ? "underline" : "none")};
`;
const Stack = styled(Text)`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 15px;
`;

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
  const [link, setLink] = useState(false);
  useEffect(() => {
    if (title === "URL" || title === "GitHub") {
      setLink(true);
    }
  }, []);
  const onClick = () => {
    if (link) {
      return window.open(text);
    } else {
      return;
    }
  };
  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faCheck} /> {title}
      </Title>
      <Box onClick={onClick}>
        {text && <Text link={link}>{text}</Text>}
        {tec && tec.map((item) => <Stack>{item}</Stack>)}
      </Box>
    </Container>
  );
};
