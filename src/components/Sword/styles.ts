import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwordImg = styled.img`
  position: absolute;

  transform: translateX(-1.5vh);
  bottom: 0;

  height: 50vh;

  @keyframes rainbow {
    100%,
    0% {
      filter: drop-shadow(0 0 0.25vh rgb(255, 0, 0));
    }
    14% {
      filter: drop-shadow(0 0 0.25vh rgb(255, 127, 0));
    }
    28% {
      filter: drop-shadow(0 0 0.25vh rgb(255, 255, 0));
    }
    43% {
      filter: drop-shadow(0 0 0.25vh rgb(0, 255, 0));
    }
    57% {
      filter: drop-shadow(0 0 0.25vh rgb(0, 127, 255));
    }
    72% {
      filter: drop-shadow(0 0 0.25vh rgb(0, 0, 255));
    }
    86% {
      filter: drop-shadow(0 0 0.25vh rgb(127, 0, 255));
    }
  }
  animation: rainbow 3s linear infinite;
`;

export const StoneImg = styled.img`
  position: absolute;

  transform: translateX(-2.5vh);
  bottom: -5vh;

  height: 25vh;

  filter: drop-shadow(0 0 0.25vh #000);
`;

export const ShineImg = styled.img`
  position: absolute;

  bottom: 5.5vh;

  height: 25vh;

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
`;
