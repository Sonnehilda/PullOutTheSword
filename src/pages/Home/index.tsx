import { useState } from "react";

import Sword from "../../components/Sword";
import Logo from "../../components/Logo";

function Home() {
  const [pullVisible, setPullVisible] = useState<boolean>(false);

  return (
    <>
      <Logo pullVisible={pullVisible} />
      <Sword pullVisible={pullVisible} setPullVisible={setPullVisible} />
    </>
  );
}

export default Home;
