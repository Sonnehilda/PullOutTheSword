import styled from "styled-components";

interface WindsImgProps {
  pulled: boolean;
}

export const WindsImg = styled.img<WindsImgProps>`
  position: absolute;

  bottom: -13vh;

  height: 50vh;

  visibility: hidden;

  z-index: 1;

  filter: drop-shadow(0 0 2vh #fff);

  @keyframes windTimeout {
    0%,
    44% {
      visibility: hidden;
    }
    45% {
      visibility: visible;
    }
    65% {
      visibility: hidden;
    }
  }

  ${(props) => props.pulled === true && "animation: windTimeout 3.5s"};
`;
