import React from "react";
import { memo } from "react";
import { Container } from "./style";
const Button = ({ children, onClick, height, width, type, mr, ml, mt, mb }) => {
  return (
    <Container
      mr={mr}
      mb={mb}
      mt={mt}
      ml={ml}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
