import React, { useCallback, useEffect, useState } from "react";

import "../index.css";

function Navbar() {
  const [cart, setCart] = useState([]);

  const getCart = () => {
    const storedArr = localStorage.getItem("productCart");
    setCart(JSON.parse(storedArr));
    return
  };

  useEffect(() => {
    getCart()
  },[]);

  return (
    <nav id="navbar" className="container d-flex justify-content-center">
      <div className="row">
        {/* <a href="/" onClick={() => props.HandleUpdate("/")}>
          Home
        </a> */}
        <a href="/" onClick={() => props.HandleUpdate("/")}>
          Produtos
        </a>
        <a href="/Request" onClick={() => props.HandleUpdate("/Request")}>
          Carrinho
        {/* <span className="qty-info">{cart.length}</span> */}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
