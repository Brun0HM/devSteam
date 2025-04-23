import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

const App = () => {
  const [carrinhoItem, setCarinhoItem] = useState([]);
  const [mostraCarrinho, setMostraCarrinho] = useState(false);

  const adicionarCarrinho = (produto) => {
 setCarinhoItem((produtosAnteriores)=>{
  const existing = produtosAnteriores.find((item) => item.id === produto.id);
  if 
 })
  }


  return (
    <>
      <Header contadorJogos={2} />
      <Promotion  adicionarCarrinho={adicionarCarrinho}/>
    </>
  );
};

export default App;
