import * as S from "./styles";

interface LogoProps {
  pullVisible: boolean;
}

const Logo = ({ pullVisible }: LogoProps) => {
  return (
    <S.Wrapper pullVisible={pullVisible}>
      <S.SubTitle>Feeling lucky?</S.SubTitle>
      <S.Title>Pull The Sword Out!</S.Title>
    </S.Wrapper>
  );
};

export default Logo;
