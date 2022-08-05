import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="AH Jim logo" />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
