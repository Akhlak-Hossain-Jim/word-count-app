import React from "react";
import styled from "styled-components";

export default function InputField({ value, setValue }) {
  const [text, setText] = React.useState(40);

  const textarea = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setText(textarea.current.scrollHeight);
    });
    setText(textarea.current.scrollHeight);
  }, [value]);

  return (
    <Container BoxHeight={text}>
      <textarea
        ref={textarea}
        name=""
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      ></textarea>
    </Container>
  );
}

const Container = styled.div`
  margin: 32px;
  box-shadow: 5px 5px 10px #9eb6b9, -5px -5px 10px #ecffff;
  border-radius: 16px;
  height: min-content;
  & > textarea {
    margin: 16px;
    width: calc(100% - 32px);
    height: ${({ BoxHeight }) => (BoxHeight ? BoxHeight : 50)}px;
    resize: both;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 20px;
    line-height: 100%;
    background-image: url("/bg.svg");
  }
`;
