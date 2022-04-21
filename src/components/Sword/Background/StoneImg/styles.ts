import styled from "styled-components";

interface StoneImgProps {
  pullState: boolean;
}

export const StoneImg = styled.img<StoneImgProps>`
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

  position: absolute;
  bottom: -5vh;

  margin-left: -2.5vh;

  height: 25vh;

  filter: drop-shadow(0 0 0.5vh #000);

  ${(props) =>
    props.pullState === true && "animation: shake 0.5s linear infinite;"}
`;
