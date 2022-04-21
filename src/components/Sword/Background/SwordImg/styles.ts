import styled from "styled-components";

interface SwordProps {
  pulled: boolean;
  pullState: boolean;
}

export const SwordImg = styled.img<SwordProps>`
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

  @keyframes pullOut {
    0%,
    25% {
      transform: rotate(0deg);
      bottom: 0vh;
      margin-left: 0vh;
    }
    50% {
      transform: rotate(0deg);
      bottom: 25vh;
      margin-left: 0vh;
    }
    75% {
      transform: rotate(180deg);
      margin-left: 5vh;
    }
  }

  position: absolute;
  bottom: 0;

  margin-right: 1.5vh;

  height: 50vh;

  filter: drop-shadow(0 0 0.5vh #000);

  ${(props) =>
    !props.pullState &&
    !props.pulled &&
    "cursor: pointer; :hover { filter: brightness(125%) drop-shadow(0 0 0.5vh #000); }"}

  ${(props) =>
    props.pullState === true && `animation: shake 0.5s linear infinite;`}
  
  ${(props) =>
    props.pulled === true &&
    "margin-left: 5vh; bottom: 25vh; transform: rotate(180deg); animation: rainbow 6s linear infinite, pullOut 6s ease-out;"}
`;
