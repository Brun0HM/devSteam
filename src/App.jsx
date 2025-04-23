import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const handleAddToCart = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <Header contadorJogos={contador} />
      <Promotion />

      <button onClick={handleAddToCart}>bla</button>
    </>
  );
}

export default App;
