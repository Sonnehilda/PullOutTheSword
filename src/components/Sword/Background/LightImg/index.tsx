import * as S from "./styles";
import { light } from "../../../../assets/images";

interface LightProps {
  pullState: boolean;
}

const LightImg = ({ pullState }: LightProps) => {
  return <S.LightImg pullState={pullState} src={light} />;
};

export default LightImg;
