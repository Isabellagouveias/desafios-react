import { useState } from "react";
const ToogleMultiplo = () => {
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);

  function handleClick() {
    setIsOn(!isOn);
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>
      <p>Você clicou: {count} vezes.</p>
    </>
  );
};

export default ToogleMultiplo;
