import React from "react";

function Footer() {
  return (
    <footer className="container">
      <div className="row justify-content-center footer-container">
        <div className="col-6 col-lg-4 mb-3">
          <h5>Atendimento</h5>
          <ul className="list-unstyled">
            <li className="mb-3 list">
              <a href="#">Fale pelo Whatsapp</a>
            </li>
            <li className="mb-3 list">Loja Online: 9999-9999</li>
            <li className="mb-3 list">Loja Física: 9999-9999</li>
          </ul>
        </div>
        <div className="col-6 col-lg-4 mb-3 footer-container">
          <h5>Sobre Nós</h5>
          <ul className="list-unstyled">
            <li className="mb-3 list">
              <a href="https://shopper.gupy.io/">Carreiras</a>
            </li>
            <li className="mb-3 list">
              <a href="https://shopper.com.br/shop/contato">Contato</a>
            </li>
            <li className="mb-3 list">
              <a href="https://shopper.com.br/blog/">Imprensa</a>
            </li>
            <li className="mb-3 list">
              <a href="https://shopper.com.br/termos-de-uso">Termos de Uso</a>
            </li>
            <li className="mb-3 list">
              <a href="https://shopper.com.br/politica-de-privacidade">Política de Privacidade</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-4 mb-3 footer-container">
          <h5>Social</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mb-3 list">
              <a href="https://www.facebook.com/shopper.com.br" className="iSocial">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="mb-3 list">
              <a href="https://www.instagram.com/shopper.com.br/" className="iSocial">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="mb-3 list">
              <a href="contato@shopper.com.br" className="iSocial">
                <i className="bi bi-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="secondary-color"><strong>Shopper &copy; 2022</strong></p>
    </footer>
  );
}

export default Footer;
