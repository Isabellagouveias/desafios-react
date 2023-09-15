import { useState } from "react";
const Toogle = () => {
  const [isOn, setIsOn] = useState(true);

  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "On" : "Off"}</button>;
};

export default Toogle;
