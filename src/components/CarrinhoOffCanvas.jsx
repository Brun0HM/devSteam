import React from "react";

const CarrinhoOffCanvas = (props) => {
  return (
    <div
      id="carrinhoOffCanvas"
      className="offcanvas offcanvas-end show"
      style={{ background: "#364A63" }}
    >
      <div
        className="offcanvas-header text-light"
        style={{ background: "#1b2838" }}
      >
        <h5 className="offcanvas-title">
          {" "}
          <i className="bi bi-cart4 me-2 fs-4"></i>Carrinho
        </h5>
        <button
          className="btn btn-close"
          style={{ color: "#fff !important" }}
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        {props.carrinhoItem.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="list-group list-group-flush w-100">
              {props.carrinhoItem.map((item) => (
                <li
                  key={item.id}
                  className="list-group px-4 py-3 shadow mt-3"
                  style={{ background: "#d9d9d9" }}
                >
                  <div className="d-flex justify-content-between">
                    <img
                      className="object-fit-cover rounded-2"
                      src={item.imagem}
                      alt={item.titulo}
                      width={56}
                      height={56}
                    />
                    <h6 className="fw-bold">{item.titulo}</h6>
                    <button
                      className="btn btn-close"
                      onClick={() => props.onRemoveCarrinho(item)}
                    ></button>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className=""></div>
                    <div className="border border-black border-1 d-flex align-items-center rounded-4 gap-2">
                      <button
                        className="btn border-0"
                        disabled={item.quantidade === 1}
                      >
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button className="btn border-0">+</button>
                    </div>

                    <div className="d-flex flex-column align-items-end">
                      <span className="text-decoration-line-through small">
                        R$
                        {item.preco.toFixed(2)}
                      </span>
                      <span className="fw-bolder">
                        R$
                        {(
                          item.preco -
                          (item.preco * item.desconto) / 100
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;
