import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart(props) {
  // PUXAR TODOS OS PRODUTOS DE UM CARRINHO
  const getCart = async () => {
    const storedArr = localStorage.getItem("productCart");
    props.setCart(JSON.parse(storedArr));
  };

  // DELETAR PRODUTO DO CARRINHO
  const handleDelete = async (id) => {
    const pullProduct = props.cart.filter((prod) => prod.id_product === id);
    const check = props.cart.indexOf(pullProduct.shift());

    props.cart.splice(check, 1);

    localStorage.setItem("productCart", JSON.stringify(props.cart));
    toast.success("Item removido com sucesso");
  };

  // ATUALIZAR O VALOR SEMPRE QUE A QUANTIDADE MUDAR
  const HandleSubmitProduct = (e, id, qty_stock) => {
    if (e > qty_stock + 1) {
      toast.error("Valor maior que o estoque atual");
      document.getElementById(id).value = qty_stock;
      document.getElementById("btnContinue").disabled = true
      const updateCart = [...props.cart];

      const newQty = updateCart
        .filter((prod) => prod.id_product === id)
        .shift();

      props.setCart(updateCart, (newQty.qty = qty_stock));
    } else {
      const updateCart = [...props.cart];

      const newQty = updateCart
        .filter((prod) => prod.id_product === id)
        .shift();

      props.setCart(updateCart, (newQty.qty = e));
      document.getElementById("btnContinue").disabled = false
    }
  };

  // SEMPRE QUE RECARREGAR A PAGINA, PUXAR O CARRINHO ATUALIZADO
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {props.cart.length > 0 ? (
        props.cart.map((prod) => {
          return (
            <div className="row" id="BuyCart" key={prod.id_product}>
              <div className="col-12 item-cart">
                <img src="https://via.placeholder.com/100" />
                <div>
                  <p>Produto</p>
                  <h6>{prod.name_product}</h6>
                </div>
                <div className="column">
                  <p>Quantidade</p>
                  <div>
                    <input
                      type="number"
                      id={prod.id_product}
                      className="qtyProductCart"
                      min="1"
                      onBlur={(e) =>
                        HandleSubmitProduct(
                          e.target.value,
                          prod.id_product,
                          prod.qty_stock
                        )
                      }
                      defaultValue={prod.qty}
                      max={prod.qty_stock}
                      onClick={(e) =>
                        HandleSubmitProduct(
                          e.target.value,
                          prod.id_product,
                          prod.qty_stock
                        )
                      }
                    />
                  </div>
                </div>
                <div>
                  <p>Valor Unidade</p>
                  <div>
                    <strong> R$ {prod.price_product} </strong>
                  </div>
                </div>
                <div>
                  <p>Valor Total</p>
                  <div>
                    <strong>
                      R$ {(prod.price_product * prod.qty).toFixed(2)}
                    </strong>
                  </div>
                </div>
                <a
                  href="#"
                  id="btn-delete"
                  onClick={() => handleDelete(prod.id_product)}
                >
                  <i className="bi bi-trash3"></i>
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-12 d-flex justify-content-center">
          <h4 className="cart-void">Carrinho Vazio...</h4>
        </div>
      )}
    </>
  );
}

export default Cart;
