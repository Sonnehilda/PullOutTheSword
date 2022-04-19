import styled from "styled-components";

interface PullVisibleProps {
  pullVisible: boolean;
}

export const Wrapper = styled.div<PullVisibleProps>`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  bottom: 0;

  width: max-content;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
  transition: filter 0.25s;

  ${(props) =>
    !props.pullVisible &&
    "cursor: pointer; :hover { filter: brightness(125%); }"}
`;

interface SwordProps {
  pullVisible: boolean;
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

  ${(props) =>
    props.pullVisible === true
      ? `animation: shake 0.5s linear infinite, rainbow ${
          6 - props.period
        }s linear infinite;`
      : `animation: rainbow 6s linear infinite;`}
`;

export const StoneImg = styled.img<PullVisibleProps>`
  position: absolute;
  bottom: -5vh;

  margin-left: -2.5vh;

  height: 25vh;

  filter: drop-shadow(0 0.25vh 0.25vh #000);

  ${(props) =>
    props.pullVisible === true && "animation: shake 0.5s linear infinite;"}
`;

export const ShineImg = styled.img<PullVisibleProps>`
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

  ${(props) => props.pullVisible === true && "opacity: 0;"}
`;

export const LightImg = styled.img<PullVisibleProps>`
  position: absolute;

  margin-left: 1vh;
  bottom: -7.5vh;

  height: 50vh;

  z-index: 3;
  opacity: 0;

  transition: opacity 1s linear;
  filter: drop-shadow(0 0 0.5vh #ffff00);
  animation: rotate 5s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${(props) =>
    props.pullVisible === true && "opacity: 1; transition: opacity 4s ease-in;"}
`;

export const WhiteScreen = styled.img<PullVisibleProps>`
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
    props.pullVisible === true
      ? "opacity: 1; transition: opacity 4s ease-in; z-index: 2;"
      : "opacity: 0; transition: opacity 1s linear; animation: tempFocus 1s;"}
`;
