import * as S from "./styles";
import { sword } from "../../../../assets/images/index";

interface SwordProps {
  random: number;
  pullState: boolean;
  period: number;
}

const SwordImg = ({ random, pullState, period }: SwordProps) => {
  return (
    <S.SwordImg
      random={random}
      pullState={pullState}
      period={period}
      src={sword}
    />
  );
};

export default SwordImg;
