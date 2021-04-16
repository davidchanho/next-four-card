import React from "react";
import { Container, Description, Subtitle, Title } from "./Header.styles";

function Header() {
  return (
    <Container>
      <Title>Reliable, efficient delivery</Title>
      <Subtitle>Powered by Technology</Subtitle>
      <Description>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Description>
    </Container>
  );
}

export default Header;
