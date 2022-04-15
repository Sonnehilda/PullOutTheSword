import * as S from "./styles";

import { sword, stone, shine } from "../../assets/images/index";

const Sword = () => {
  return (
    <S.Wrapper>
      <S.SwordImg src={sword}></S.SwordImg>
      <S.StoneImg src={stone}></S.StoneImg>
      <S.ShineImg src={shine}></S.ShineImg>
    </S.Wrapper>
  );
};

export default Sword;
