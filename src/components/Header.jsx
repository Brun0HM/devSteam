import React from "react";

const Header = () => {
  return (
    <header className="w-100 navbar navbar-dark bg-dark justify-content-around align-items-center">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div role="button" className="d-flex">
          <i class="bi bi-controller fs-1 text-light me-3"></i>
          <span className="navbar-brand fw-bold fs-3">devSteam</span>
        </div>
        <input
          type="text"
          className="w-100 d-none border-0 rounded-1 d-md-block search-input px-4 my-2 ms-5"
          placeholder="Buscar..."
        />
      </div>

      <div id="cart" role="button">
        <i className=" bi bi-cart4 text-light fs-2"></i>
      </div>
    </header>
  );
};

export default Header;
