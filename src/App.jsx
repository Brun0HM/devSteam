import "./App.css";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import { useEffect, useState } from "react";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinhoItem));
  }, [carrinhoItem]);
  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("carrinho");
    salvaCarrinho && setCarrinhoItem(JSON.parse(salvaCarrinho));
  }, []);

  console.log(localStorage.getItem("carrinho"));

  const handleAddToCart = (produto) => {
    setCarrinhoItem((ItemAnterior) => {
      const existente = ItemAnterior.find((item) => item.id === produto.id);
      if (existente) {
        return ItemAnterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...ItemAnterior, { ...produto, quantidade: 1 }];
      }
    });
  };

  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <Promotion onAdd={handleAddToCart} />

      <CarrinhoOffCanvas />
    </>
  );
}

export default App;
