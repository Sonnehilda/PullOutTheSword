import * as S from "./styles";

import StoneImg from "./Background/StoneImg";
import ShineImg from "./Background/ShineImg";
import SwordImg from "./Background/SwordImg";
import LightImg from "./Background/LightImg";
import WindsImg from "./Background/WindsImg";
import { useState } from "react";

interface SwordProps {
  pullState: boolean;
  pulled: boolean;
  setPullState: React.Dispatch<React.SetStateAction<boolean>>;
  setPulled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sword = ({ pullState, setPullState, pulled, setPulled }: SwordProps) => {
  const [period, setPeriod] = useState<number>(0.8);

  const pullSword = () => {
    if (pullState === false) {
      setPullState(true);

      const interval = setInterval(() => {
        setPeriod((period) => period + 0.125);
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setPeriod(0.8);

        const r = Math.floor(Math.random() * (1 - 1 + 1)) + 1;
        if (r.toString() === process.env.REACT_APP_KEY) setPulled(true);

        setPullState(false);
      }, 4500);
    }
  };

  return (
    <>
      <S.Wrapper pullState={pullState} onClick={pullSword}>
        <WindsImg pulled={pulled} />
        <SwordImg pulled={pulled} pullState={pullState} period={period} />
        <StoneImg pullState={pullState} />
        <ShineImg pullState={pullState} />
        <LightImg pullState={pullState} />
      </S.Wrapper>
    </>
  );
};

export default Sword;
