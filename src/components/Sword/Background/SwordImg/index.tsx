import * as S from "./styles";
import { sword } from "../../../../assets/images/index";
import { useState } from "react";

interface SwordProps {
  pulled: boolean;
  pullState: boolean;
  setPullState: React.Dispatch<React.SetStateAction<boolean>>;
  setPulled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwordImg = ({
  pulled,
  pullState,
  setPullState,
  setPulled,
}: SwordProps) => {
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
    <S.SwordImg
      pulled={pulled}
      pullState={pullState}
      period={period}
      src={sword}
      onClick={pullSword}
    />
  );
};

export default SwordImg;
