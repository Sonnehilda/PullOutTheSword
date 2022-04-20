import styled from "styled-components";

interface ShineImgProps {
  pullState: boolean;
}

export const ShineImg = styled.img<ShineImgProps>`
  position: absolute;

  bottom: 5.5vh;

  height: 25vh;

  transition: opacity 1.5s;
  filter: drop-shadow(0 0 0.5vh #fff);

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotate 10s linear infinite;

  ${(props) => props.pullState === true && "opacity: 0;"}
`;