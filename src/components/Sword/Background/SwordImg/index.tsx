import * as S from "./styles";
import { sword } from "../../../../assets/images/index";

interface SwordProps {
  pulled: boolean;
  pullState: boolean;
  period: number;
}

const SwordImg = ({ pulled, pullState, period }: SwordProps) => {
  return (
    <S.SwordImg
      pulled={pulled}
      pullState={pullState}
      period={period}
      src={sword}
    />
  );
};

export default SwordImg;
