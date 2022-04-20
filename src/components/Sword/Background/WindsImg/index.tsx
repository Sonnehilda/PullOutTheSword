import * as S from "./styles";
import { winds } from "../../../../assets/images";

interface WindsProps {
  random: number;
  pullState: boolean;
}

const WindsImg = ({ random, pullState }: WindsProps) => {
  return <S.WindsImg random={random} pullState={pullState} src={winds} />;
};

export default WindsImg;
