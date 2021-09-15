import styled from "styled-components";
import React from "react";
import { BaseButton } from "../button/BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;

  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
