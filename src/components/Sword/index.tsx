import * as S from "./styles";

const SwordImg = require("../../assets/photos/sword.png");
const StoneImg = require("../../assets/photos/stone.png");
const ShineImg = require("../../assets/photos/shine.png");

const Sword = () => {
  return (
    <S.Wrapper>
      <S.SwordImg src={SwordImg}></S.SwordImg>
      <S.StoneImg src={StoneImg}></S.StoneImg>
      <S.ShineImg src={ShineImg}></S.ShineImg>
    </S.Wrapper>
  );
};

export default Sword;
