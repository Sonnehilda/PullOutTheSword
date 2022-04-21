import styled from "styled-components";

interface LightImgProps {
  pullState: boolean;
}

export const LightImg = styled.img<LightImgProps>`
  position: absolute;

  margin-left: 1vh;
  bottom: -7.5vh;

  height: 50vh;

  visibility: hidden;

  opacity: 0;
  z-index: 3;

  transition: opacity 1s linear;
  animation: rotate 5s linear infinite;

  ${(props) =>
    props.pullState === true &&
    "visibility: visible; opacity: 1; transition: opacity 4s ease-in;"}
`;
