import * as S from "./styles";

interface LogoProps {
  pullState: boolean;
}

const Logo = ({ pullState }: LogoProps) => {
  return (
    <S.Wrapper pullState={pullState}>
      <S.SubTitle>Feeling lucky?</S.SubTitle>
      <S.Title>Pull The Sword Out!</S.Title>
    </S.Wrapper>
  );
};

export default Logo;
