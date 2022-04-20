import * as S from "./styles";
import { stone } from "../../../../assets/images/index";

interface StoneProps {
  random: number;
  pullState: boolean;
}

const StoneImg = ({ random, pullState }: StoneProps) => {
  return <S.StoneImg random={random} pullState={pullState} src={stone} />;
};

export default StoneImg;
