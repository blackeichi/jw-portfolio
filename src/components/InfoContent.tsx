import React from "react";
import { useNavigate } from "react-router";
import { ContentTitle, Info, Text } from "../Profile";

type ContentType = {
  title: string;
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  click?: boolean;
};

export const InfoContent: React.FC<ContentType> = ({
  title,
  one,
  two,
  three,
  four,
  click = false,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/proposal`);
  };
  return (
    <Info>
      <ContentTitle>{title}</ContentTitle>
      <Text>{one}</Text>
      {click ? (
        <Text style={{ cursor: "pointer" }} onClick={onClick}>
          {two}
        </Text>
      ) : (
        <Text> {two}</Text>
      )}

      <Text>{three}</Text>
      {four ? <Text>{four}</Text> : null}
    </Info>
  );
};
