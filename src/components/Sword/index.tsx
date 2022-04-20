import * as S from "./styles";

import StoneImg from "./Background/StoneImg";
import ShineImg from "./Background/ShineImg";
import SwordImg from "./Background/SwordImg";
import LightImg from "./Background/LightImg";
import WindsImg from "./Background/WindsImg";

interface SwordProps {
  pullState: boolean;
  pulled: boolean;
  setPullState: React.Dispatch<React.SetStateAction<boolean>>;
  setPulled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sword = ({ pullState, setPullState, pulled, setPulled }: SwordProps) => {
  return (
    <>
      <S.Wrapper>
        <WindsImg pulled={pulled} />
        <SwordImg
          pulled={pulled}
          pullState={pullState}
          setPullState={setPullState}
          setPulled={setPulled}
        />
        <StoneImg pullState={pullState} />
        <ShineImg pulled={pulled} pullState={pullState} />
        <LightImg pullState={pullState} />
      </S.Wrapper>
    </>
  );
};

export default Sword;
