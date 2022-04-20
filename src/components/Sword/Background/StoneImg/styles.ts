import styled from "styled-components";

interface StoneImgProps {
  random: number;
  pullState: boolean;
}

export const StoneImg = styled.img<StoneImgProps>`
  position: absolute;
  bottom: -5vh;

  margin-left: -2.5vh;

  height: 25vh;

  filter: drop-shadow(0 0.25vh 0.25vh #000);

  ${(props) =>
    props.pullState === true && "animation: shake 0.5s linear infinite;"}
`;