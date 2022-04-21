import * as S from "./styles";

interface LogoProps {
  pullState: boolean;
  pulled: boolean;
}

const Logo = ({ pullState, pulled }: LogoProps) => {
  return (
    <S.Wrapper pulled={pulled} pullState={pullState}>
      {pulled === false ? (
        <>
          <S.SubTitle>Feeling lucky?</S.SubTitle>
          <S.Title>Pull The Sword Out!</S.Title>
        </>
      ) : (
        <>
          <S.SubTitle>Congratulations!</S.SubTitle>
          <S.Title>You Pulled The Sword Out!</S.Title>
        </>
      )}
    </S.Wrapper>
  );
};

export default Logo;
