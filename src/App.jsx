import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  return (
    <>
      <Header contadorJogos={2} />
      <Promotion />
    </>
  );
}

export default App;
