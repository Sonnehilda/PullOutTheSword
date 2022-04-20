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

  filter: drop-shadow(0 0 1vh #fff);

  @keyframes tempVisible {
    from {
      visibility: visible;
    }
    to {
      visibility: hidden;
    }
  }

  ${(props) => props.pulled === true && "animation: tempVisible 0.6s;"};
`;
