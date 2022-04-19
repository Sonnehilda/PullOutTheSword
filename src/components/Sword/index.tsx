import * as S from "./styles";

import { sword, stone, shine, light } from "../../assets/images/index";
import { useState } from "react";

interface SwordProps {
  pullVisible: boolean;
  setPullVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sword = ({ pullVisible, setPullVisible }: SwordProps) => {
  const [period, setPeriod] = useState<number>(0.8);

  const pullSword = () => {
    if (pullVisible === false) {
      setPullVisible(true);

      const interval = setInterval(() => {
        setPeriod((period) => period + 0.125);
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setPeriod(0.8);
        setPullVisible(false);
      }, 4000);
    }
  };

  return (
    <>
      <S.Wrapper pullVisible={pullVisible} onClick={pullSword}>
        <S.SwordImg
          pullVisible={pullVisible}
          period={period}
          src={sword}
        ></S.SwordImg>
        <S.StoneImg pullVisible={pullVisible} src={stone}></S.StoneImg>
        <S.ShineImg pullVisible={pullVisible} src={shine}></S.ShineImg>
        <S.LightImg pullVisible={pullVisible} src={light}></S.LightImg>
      </S.Wrapper>
      <S.WhiteScreen pullVisible={pullVisible} />
    </>
  );
};

export default Sword;
