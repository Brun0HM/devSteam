import React from "react";

const PromoCard = (props) => {
  return (
    <div id="Promo" className="promoCard card border-0 overflow-hidden">
      <img
        className="card-img-top object-fit-cover"
        src="https://placehold.co/250x300"
        height={300} //ADICIONADO
        alt="Titulo do jogo"
      />
      <div className="card-body d-flex flex-column gap-2">
        <h5 className="card-title text-uppercase fw-bold text-light">Titulo</h5>
        <div className="m-0 row h-100 align-items-center justify-content-center">
          <span className="desconto col-4 h-100 fw-bold h5 m-0 py-3 text-center">
            -50%
          </span>
          <div className="col h-100 card-text bg-dark">
            <p className="m-0 p-0 text-end text-secondary text-decoration-line-through small">
              <small>R$199,99</small>
            </p>
            <p className="corValor m-0 p-0 fs-4 text-end text-success fw-bolder">
              R$99,99
            </p>
          </div>
        </div>
        <button id="addCarrinho" className="btn btn-success desconto text-light w-100">
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
