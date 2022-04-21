import { useState } from "react";

import Sword from "../../components/Sword";
import Logo from "../../components/Logo";
import Flash from "../../components/Flash";

function Home() {
  const [pullState, setPullState] = useState<boolean>(false);
  const [pulled, setPulled] = useState<boolean>(false);

  return (
    <>
      <Logo pulled={pulled} pullState={pullState} />
      <Flash pulled={pulled} pullState={pullState} />
      <Sword
        pulled={pulled}
        setPulled={setPulled}
        pullState={pullState}
        setPullState={setPullState}
      />
    </>
  );
}

export default Home;
