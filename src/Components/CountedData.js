import React from "react";
import styled from "styled-components";

export default function CountedData({ text }) {
  const [WordCount, setWordCount] = React.useState(0);
  const [CharacterCount, setCharacterCount] = React.useState(0);

  React.useEffect(() => {
    if (text !== "" && text !== undefined && text !== null) {
      setWordCount(
        text
          .split(" ")
          .filter((content) => (content !== null || content !== "") && content)
          .length
      );
      setCharacterCount(text.length);
    }
  }, [text]);
  return (
    <Container>
      <div className="countedDataBox">
        <p>Total Words Counted:</p>
        <h1>{WordCount}</h1>
      </div>
      <div className="countedDataBox">
        <p>Total Characters Counted:</p>
        <h1>{CharacterCount}</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  @media (max-width: 548px) {
    grid-template-columns: 1fr;
  }
  .countedDataBox {
    background: linear-gradient(145deg, #d3f4f7, #b1cdd0);
    box-shadow: 5px 5px 10px #9eb6b9, -5px -5px 10px #ecffff;
    padding: 32px;
    border-radius: 24px;
  }
`;
