import React, { useCallback, useEffect, useState } from "react";

import "../index.css";

function Navbar(props) {

  return (
    <div>
    <nav id="navbar" className="container d-flex justify-content-center">
      <div className="row">
        <a href="/" onClick={() => props.HandleUpdate("/")}>
          Produtos
        </a>
        <a href="/Request" onClick={() => props.HandleUpdate("/Request")}>
          Carrinho
        </a>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
