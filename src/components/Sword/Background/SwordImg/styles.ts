import styled from "styled-components";

interface SwordProps {
  pulled: boolean;
  pullState: boolean;
  period: number;
}

export const SwordImg = styled.img<SwordProps>`
  position: absolute;
  bottom: 0;

  margin-left: -1.5vh;

  height: 50vh;

  @keyframes rainbow {
    100%,
    0% {
      filter: drop-shadow(0 0 1vh rgb(255, 0, 0));
    }
    14% {
      filter: drop-shadow(0 0 1vh rgb(255, 127, 0));
    }
    28% {
      filter: drop-shadow(0 0 1vh rgb(255, 255, 0));
    }
    43% {
      filter: drop-shadow(0 0 1vh rgb(0, 255, 0));
    }
    57% {
      filter: drop-shadow(0 0 1vh rgb(0, 127, 255));
    }
    72% {
      filter: drop-shadow(0 0 1vh rgb(0, 0, 255));
    }
    86% {
      filter: drop-shadow(0 0 1vh rgb(127, 0, 255));
    }
  }

  @keyframes shake {
    0% {
      transform: translate(0.05vh, 0.05vh) rotate(0deg);
    }
    10% {
      transform: translate(-0.05vh, -0.1vh) rotate(-1deg);
    }
    20% {
      transform: translate(-0.15vh, 0vh) rotate(1deg);
    }
    30% {
      transform: translate(0.15vh, 0.1vh) rotate(0deg);
    }
    40% {
      transform: translate(0.05vh, -0.05vh) rotate(1deg);
    }
    50% {
      transform: translate(-0.05vh, 0.1vh) rotate(-1deg);
    }
    60% {
      transform: translate(-0.15vh, 0.05vh) rotate(0deg);
    }
    70% {
      transform: translate(0.15vh, 0.05vh) rotate(-1deg);
    }
    80% {
      transform: translate(-0.05vh, -0.05vh) rotate(1deg);
    }
    90% {
      transform: translate(0.05vh, 0.1vh) rotate(0deg);
    }
    100% {
      transform: translate(0.05vh, -0.1vh) rotate(-1deg);
    }
  }

  animation: rainbow 6s linear infinite;

  ${(props) =>
    props.pullState === true &&
    `animation: shake 0.5s linear infinite, rainbow ${
      6 - props.period
    }s linear infinite;`}
`;
