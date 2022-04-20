import { useState } from "react";

import Sword from "../../components/Sword";
import Logo from "../../components/Logo";
import Flash from "../../components/Flash";

function Home() {
  const [pullState, setPullState] = useState<boolean>(false);
  const [pulled, setPulled] = useState<boolean>(false);
  const [period, setPeriod] = useState<number>(0.8);
  const [random, setRandom] = useState<number>(0);

  return (
    <>
      <Logo pullState={pullState} />
      <Flash random={random} pullState={pullState} />
      <Sword
        period={period}
        setPeriod={setPeriod}
        random={random}
        setRandom={setRandom}
        pulled={pulled}
        setPulled={setPulled}
        pullState={pullState}
        setPullState={setPullState}
      />
    </>
  );
}

export default Home;
