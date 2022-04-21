import styled from "styled-components";

export const PreFooter = styled.footer`
  position: fixed;
  bottom: 0vh;

  width: 100%;
  height: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

export const Footer = styled.footer`
  margin: 0 auto;

  width: 65vh;
  height: 5vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > div {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Copyright = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  position: relative;
  right: 0.5vh;

  padding-left: 1vh;
  padding-right: 1vh;

  font-size: 2.5vh;
  color: #fff;

  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
`;
