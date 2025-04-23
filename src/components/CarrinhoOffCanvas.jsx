import React from "react";

const CarrinhoOffCanvas = (props) => {
  const total = props.carrinhoItem.reduce(
    (acc, item) =>
      acc + (item.preco - (item.preco * item.desconto) / 100) * item.quantidade,
    0
  );

  const handleUpdateCarrinho = (produto, novaQuantidade) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: novaQuantidade > 0 ? novaQuantidade : 0 }
          : item
      )
    );
  };

  return (
    <div
      id="carrinhoOffCanvas"
      className="offcanvas offcanvas-end"
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
        <i
          role="button"
          className="ms-auto fs-2 p-0 m-0 bi bi-x"
          data-bs-dismiss="offcanvas"
        ></i>
      </div>

      <div className="offcanvas-body">
        {props.carrinhoItem.length === 0 ? (
          <p className="text-center text-light">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="list-group list-group-flush">
              {props.carrinhoItem.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-3 shadow mt-3 d-flex gap-3 rounded "
                  style={{ background: "#d9d9d9" }}
                >
                  <img
                    className="object-fit-cover rounded-2"
                    src={item.imagem}
                    alt={item.titulo}
                    width={60}
                    height={80}
                  />
                  <div className="w-100">
                    <div className="d-flex justify-content-between">
                      <h6 className="fw-bold p-1">{item.titulo}</h6>
                      <i
                        role="button"
                        className="bi bi-trash fs-5 text-danger"
                        onClick={() => props.onRemoveCarrinho(item)}
                      ></i>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="border border-dark-subtle border-1 d-flex align-items-center rounded-4 gap-2">
                        <button
                          className="btn border-0"
                          disabled={item.quantidade === 1}
                          onClick={() =>
                            props.onUpdateCarrinho(item, item.quantidade - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantidade}</span>
                        <button
                          onClick={() =>
                            props.onUpdateCarrinho(item, item.quantidade + 1)
                          }
                          className="btn border-0"
                        >
                          +
                        </button>
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
                  </div>
                </li>
              ))}
            </ul>

            <hr className="text-light" />
            <div className="d-flex text-light fs-4 justify-content-between">
              <strong>Total:</strong>
              <strong>R$: {total.toFixed(2)}</strong>
            </div>
            <button className="btn btn-success desconto border-0 fs-5 w-100 mt-2">
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CarrinhoOffCanvas;
