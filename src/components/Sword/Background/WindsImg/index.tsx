import * as S from "./styles";
import { winds } from "../../../../assets/images";

interface WindsProps {
  pulled: boolean;
}

const WindsImg = ({ pulled }: WindsProps) => {
  return <S.WindsImg pulled={pulled} src={winds} />;
};

export default WindsImg;
