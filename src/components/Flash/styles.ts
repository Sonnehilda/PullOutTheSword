import styled from "styled-components";

interface DefaultProps {
  random: number;
  pullState: boolean;
}

export const Flash = styled.img<DefaultProps>`
  background-color: #fff;

  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  opacity: 0;
  z-index: 0;

  @keyframes tempFocus {
    from {
      z-index: 6;
    }
    to {
      z-index: 4;
    }
  }

  ${(props) =>
    props.pullState === true
      ? "opacity: 1; transition: opacity 4s ease-in; z-index: 2;"
      : (props) =>
          props.random.toString() === process.env.REACT_APP_KEY
            ? "opacity: 0; transition: opacity 8s linear; animation: tempFocus 8s;"
            : "opacity: 0; transition: opacity 1s linear; animation: tempFocus 1s;"}
`;
