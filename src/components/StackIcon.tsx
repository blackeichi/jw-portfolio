import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 80px;
  height: 80px;
`;
const Box = styled.div`
  width: 80px;
  height: 80px;
`;
const Container = styled.div`
  width: 85px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;
const Text = styled.h2`
  font-family: "NotoSerifKRbold";
  font-size: 10px;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 15px;
`;

type IconInterface = {
  title?: string;
  path: string;
};

export const StackIcon: React.FC<IconInterface> = ({ title = "", path }) => {
  return (
    <Container>
      <Box>
        <Image src={path} alt={title} />
      </Box>
      <Text>{title}</Text>
    </Container>
  );
};
