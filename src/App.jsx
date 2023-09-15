import "./App.css";
import Toogle from "./components/Toogle";
import ToogleMultiplo from "./components/ToogleMultiplo";

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toogle />
      <h2>2 - Usando estado multiplo</h2>
      <ToogleMultiplo />
    </>
  );
}

export default App;
