import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Icon = styled(motion.div)`
  position: fixed;
  bottom: 70px;
  right: 70px;
  z-index: 1;
  width: 70px;
  height: 70px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const HomeBtn = () => {
  const navigate = useNavigate();
  return (
    <Icon
      whileHover={{ backgroundColor: "#ffc93c" }}
      transition={{ duration: 0.1 }}
      onClick={() => {
        navigate("/profile");
      }}
    >
      <FontAwesomeIcon size="2x" color="white" icon={faHome} />
    </Icon>
  );
};
