import * as S from "./styles";

interface FlashProps {
  pulled: boolean;
  pullState: boolean;
}

const Flash = ({ pulled, pullState }: FlashProps) => {
  return <S.Flash pulled={pulled} pullState={pullState} />;
};

export default Flash;
