import React from "react";
import PromoCard from "./PromoCard";

const promotion = () => {
  return (
    <div id="promotion">
      <h2>Promoções</h2>
      <div
        id="ItensPromo"
        className="d-flex flex-wrap gap-4 justify-content-around"
      >
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </div>
    </div>
  );
};

export default promotion;
