import styled from "styled-components";

interface WrapperProps {
  pullState: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
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
    !props.pullState && "cursor: pointer; :hover { filter: brightness(125%); }"}
`;
