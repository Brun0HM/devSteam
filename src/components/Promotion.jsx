import React from "react";
import PromoCard from "./PromoCard";

const Promotion = () => {
  const games = [
    {
      id: 1,
      titulo: "Counter-Strike 2",
      preco: 0.0,
      desconto: 0,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      id: 2,
      titulo: "Cyberpunk 2077",
      preco: 129.99,
      desconto: 20, // 20% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    },
    {
      id: 3,
      titulo: "Elden Ring",
      preco: 249.9,
      desconto: 35, // 35% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    },
    {
      id: 4,
      titulo: "Red Dead Redemption 2",
      preco: 199.9,
      desconto: 40, // 40% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    },
    {
        id: 4,
        titulo: "Red Dead Redemption 2",
        preco: 199.9,
        desconto: 40, // 40% off
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      },
      {
        id: 4,
        titulo: "Red Dead Redemption 2",
        preco: 199.9,
        desconto: 40, // 40% off
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      },
      {
        id: 4,
        titulo: "Red Dead Redemption 2",
        preco: 199.9,
        desconto: 40, // 40% off
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      },
  ];

  return (
    <div id="promotion" className="container w-75 my-5">
      <h2 className="text-uppercase">Promoções</h2>
      <div
        id="itensPromo"
        className="d-flex flex-wrap gap-4 justify-content-between"
      >
        
        {games

          .filter((jogo) => jogo.desconto > 0)
          .sort(()=> Math.random() - 0.5) 
          .slice(0, 3)
          .map((jogo) => (
            <PromoCard
              key={jogo.id}
              titulo={jogo.titulo}
              preco={jogo.preco.toFixed(2)}
              desconto={jogo.desconto}
              imagem={jogo.imagem}
            />
          ))}
      </div>
    </div>
  );
};

export default Promotion;
