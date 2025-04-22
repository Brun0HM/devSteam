import React from "react";

const PromoCard = (props) => {
  return (
    <div id="PromoCard" className="promoCard card border-0 overflow-hidden">
      <img
        className="card-img-top object-fit-cover"
        src={props.imagem}
        height={300}
        alt="Titulo do jogo"
      />
      <div className="card-body d-flex flex-column gap-2">
        <h5 className="card-title text-uppercase fw-bold text-light text-nowrap">
          {props.titulo}
        </h5>
        <div className="m-0 row h-100 align-items-center justify-content-center">
          <span className="desconto col-4 h-100 fw-bold h5 m-0 py-3 text-center">
            -{props.desconto}%
          </span>
          <div className="col h-100 card-text bg-dark">
            <p className="m-0 p-0 text-end text-secondary text-decoration-line-through small">
              <small>R${props.preco}</small>
            </p>
            <p className="corValor m-0 p-0 fs-4 text-end fw-bolder">
              R$
              {(props.preco - (props.preco * props.desconto) / 100).toFixed(2)}
            </p>
          </div>
        </div>
        <button
          id="addCarrinho"
          className="btn btn-success desconto text-light w-100 border-0"
        >
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
