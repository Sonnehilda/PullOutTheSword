import * as S from "./styles";
import { shine } from "../../../../assets/images";

interface ShineProps {
  pulled: boolean;
  pullState: boolean;
}

const ShineImg = ({ pulled, pullState }: ShineProps) => {
  return <S.ShineImg pulled={pulled} pullState={pullState} src={shine} />;
};

export default ShineImg;
