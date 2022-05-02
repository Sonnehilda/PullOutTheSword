import styled from "styled-components";

interface ShineImgProps {
  pulled: boolean;
  pullState: boolean;
}

export const ShineImg = styled.img<ShineImgProps>`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes tempInvisible {
    0%,
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: absolute;

  bottom: 5.5vh;

  height: 25vh;

  transition: opacity 1.5s;
  animation: rotate 10s linear infinite;

  ${(props) => props.pullState === true && "opacity: 0;"}

  ${(props) =>
    props.pulled === true &&
    "animation: tempInvisible 5.5s, rotate 10s linear infinite; bottom: 62.5vh; left: -11.5vh;"}
`;
