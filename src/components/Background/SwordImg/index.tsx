import * as S from "./styles";
import { sword } from "../../../../assets/images/index";

interface SwordProps {
  pulled: boolean;
  pullState: boolean;
  setPullState: React.Dispatch<React.SetStateAction<boolean>>;
  setPulled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwordImg = ({
  pulled,
  pullState,
  setPullState,
  setPulled,
}: SwordProps) => {
  const pullSword = () => {
    if (pullState === false) {
      setPullState(true);

      setTimeout(() => {
        const r = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        if (r.toString() === process.env.REACT_APP_KEY) setPulled(true);

        setPullState(false);
      }, 4500);
    }
  };

  return (
    <S.SwordImg
      pulled={pulled}
      pullState={pullState}
      src={sword}
      onClick={pullSword}
    />
  );
};

export default SwordImg;
