import * as S from "./styles";

import StoneImg from "./Background/StoneImg";
import ShineImg from "./Background/ShineImg";
import SwordImg from "./Background/SwordImg";
import LightImg from "./Background/LightImg";
import WindsImg from "./Background/WindsImg";

interface SwordProps {
  period: number;
  random: number;
  pulled: boolean;
  pullState: boolean;
  setPullState: React.Dispatch<React.SetStateAction<boolean>>;
  setPulled: React.Dispatch<React.SetStateAction<boolean>>;
  setPeriod: React.Dispatch<React.SetStateAction<number>>;
  setRandom: React.Dispatch<React.SetStateAction<number>>;
}

const Sword = ({
  pulled,
  period,
  setPeriod,
  random,
  setRandom,
  pullState,
  setPullState,
}: SwordProps) => {
  const pullSword = () => {
    if (pullState === false) {
      setPullState(true);

      const interval = setInterval(() => {
        setPeriod((period) => period + 0.125);
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setPeriod(0.8);

        setRandom(Math.floor(Math.random() * (1 - 1 + 1)) + 1);
        setPullState(false);
      }, 4500);
    }
  };

  return (
    <>
      <S.Wrapper pullState={pullState} onClick={pullSword}>
        <WindsImg random={random} pullState={pullState} />
        <SwordImg random={random} pullState={pullState} period={period} />
        <StoneImg random={random} pullState={pullState} />
        <ShineImg pullState={pullState} />
        <LightImg pullState={pullState} />
      </S.Wrapper>
    </>
  );
};

export default Sword;
