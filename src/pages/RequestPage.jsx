import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "../pages.css";

function RequestPage() {
  const [cart, setCart] = useState([]);

  // VALOR TOTAL DOS PRODUTOS
  let result = [];

  for (let i = 0; i < cart.length; i++) {
    const element = (cart[i].price_product * cart[i].qty).toFixed(2);
    result.push(element);
  }

  const somaTotal = (arr) => {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += Number(arr[i]);
    }
    return soma.toFixed(2);
  };

  // ATUALIZAR CARRINHO
  const navigate = useNavigate();
  const HandleUpdate = (url) => {
    for (let i = 0; i < cart.length; i++) {
      const body = {
        id_product: Number(cart[i].id_product),
        name_product: cart[i].name_product,
        price_product: cart[i].price_product,
        qty: Number(cart[i].qty),
        qty_stock: Number(cart[i].qty_stock),
      };

      if (cart[i].qty < cart[i].qty_stock) {
        const check = cart.indexOf(cart[i]);
        cart.splice(check, 1);

        cart.push(body);
        localStorage.setItem("productCart", JSON.stringify(cart));
      }
    }
    if (url === "/UserRegistration" && cart.length === 0) {
      toast.info("Não há nenhum item para prosseguir com a compra");
      return
    }
    return navigate(url)
  };

  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar HandleUpdate={HandleUpdate}/>
        <div className="container" id="request-container">
          <hr />
          <div className="col-12 d-flex" id="process">
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center" id="active">
                <i className="bi bi-1-circle"></i>
                <p>Carrinho</p>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center">
                <i className="bi bi-2-circle"></i>
                <p>Dados de Entrega</p>
              </div>
            </div>
          </div>

          <div id="Request">
            <div className="col-12 title-resquest">
              <h3>Confira Seu Carrinho</h3>
              <i className="bi bi-caret-left">
                <a href="#" onClick={() => HandleUpdate("/")}>
                  Continue Comprando
                </a>
              </i>
            </div>
          </div>

          <Cart
            cart={cart}
            setCart={setCart}
          />

          <div className="row">
            <div className="col-12 d-flex components-request">
              <div className="request-buy col-12">
                <h3 className="mb-4">Resumo</h3>
                <ul className="list-unstyled">
                  <li className="m-3 pt-3">
                    <h5>Total Da Compra: <strong>R$ {somaTotal(result)}</strong></h5> 
                  </li>
                  <hr />
                </ul>
                <button
                  className="btn"
                  id="btnContinue"
                  onClick={() => HandleUpdate("/UserRegistration")}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default RequestPage;
