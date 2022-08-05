import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import CountedData from "./Components/CountedData";
import InputField from "./Components/Inputfield";

export default function App() {
  const [text, setText] = React.useState("");

  return (
    <Container>
      <Header />
      <CountedData text={text} />
      <InputField value={text} setValue={setText} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
