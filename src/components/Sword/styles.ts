import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  bottom: 0vh;

  width: max-content;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
  transition: filter 0.25s;
`;
