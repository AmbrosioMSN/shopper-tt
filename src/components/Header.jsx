import React from "react";
import Logo from "../img/1621454624147-removebg-preview.png";

import "../index.css";

function Header() {
  return (
    <header className="column" id="header">
      <div id="logo-container">
        <img src={Logo} alt="Art" id="logo" />
        <h1>Shopper TT</h1>
      </div>
      <p className="sub">Teste Técnico</p>
    </header>
  );
}

export default Header;
