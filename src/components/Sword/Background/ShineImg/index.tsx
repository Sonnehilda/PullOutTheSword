import * as S from "./styles";
import { shine } from "../../../../assets/images";

interface ShineProps {
  pullState: boolean;
}

const ShineImg = ({ pullState }: ShineProps) => {
  return <S.ShineImg pullState={pullState} src={shine} />;
};

export default ShineImg;
