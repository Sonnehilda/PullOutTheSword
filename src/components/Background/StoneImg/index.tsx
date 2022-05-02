import * as S from "./styles";
import { stone } from "../../../../assets/images/index";

interface StoneProps {
  pullState: boolean;
}

const StoneImg = ({ pullState }: StoneProps) => {
  return <S.StoneImg pullState={pullState} src={stone} />;
};

export default StoneImg;
