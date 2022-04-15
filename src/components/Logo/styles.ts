import styled from "styled-components";

export const Wrapper = styled.div`
  transform: translateY(5vh);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 8vh;
  color: #d9f489;

  filter: brightness(125%) drop-shadow(0 0 0.5vh #aaa)
    drop-shadow(0 0 2vh #bdcf88);
`;

export const SubTitle = styled.div`
  font-size: 6vh;
  color: #edfead;

  filter: brightness(100%) drop-shadow(0 0 0.5vh #aaa)
    drop-shadow(0 0 2vh #bdcf88);
`;
