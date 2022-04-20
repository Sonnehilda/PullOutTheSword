import * as S from "./styles";

interface FlashProps {
  random: number;
  pullState: boolean;
}

const Flash = ({ random, pullState }: FlashProps) => {
  return <S.Flash random={random} pullState={pullState} />;
};

export default Flash;
