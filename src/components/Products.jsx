import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products({ page }) {
  const [productList, setProductList] = useState([]);
  const [qtyProduct, setQtyProduct] = useState();
  const [cart, setCart] = useState([]);

  //RENDERIZAÇÃO DOS PRODUTOS
  const getProducts = async () => {
    await axios(`http://localhost:3003/product?page=${page}`)
      .then((resp) => {
        setProductList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
    cartProduts();
  }, [page]);

  //ADICIONAR AO CARRINHO
  const cartProduts = () => {
    const storedArr = localStorage.getItem("productCart");
    setCart(JSON.parse(storedArr));
  };

  const HandleAddProduct = async (id, name, price, qty_stock) => {
    if (qtyProduct > qty_stock) {
      toast.error("Valor maior que o estoque disponivel!");
      return;
    }

    const element = cart
      .filter((resp) => {
        return resp.id_product === id;
      })
      .shift();

    if (!element) {
      const body = {
        id_product: id,
        name_product: name,
        price_product: price,
        qty: qtyProduct === undefined ? 1 : qtyProduct,
        qty_stock: qty_stock,
      };

      cart.push(body);
      localStorage.setItem("productCart", JSON.stringify(cart));
      toast.success("Produto adicionado com sucesso");
    } else {
      const body = {
        id_product: element.id_product,
        name_product: element.name_product,
        price_product: element.price_product,
        qty: element.qty + (qtyProduct === undefined ? 1 : qtyProduct),
        qty_stock: element.qty_stock,
      };

      const check = cart.indexOf(element);
      cart.splice(check, 1);

      cart.push(body);
      localStorage.setItem("productCart", JSON.stringify(cart));
      toast.success("Produto acrescentado com sucesso");
    }
    setQtyProduct(1);
  };

  return (
    <>
      {productList.length > 0 ? (
        productList.map((prod) => {
          if (prod.stock_qty > 0) {
            return (
              <form className="col-xs-6 col-md-6" key={prod.id}>
                <img src="https://via.placeholder.com/300" alt="" />
                <h4>{prod.name}</h4>
                <p>
                  Valor: <strong>R$ {prod.price}</strong>
                </p>
                <p>
                  Em Estoque: <strong>{prod.stock_qty}</strong>
                </p>
                <div className="d-flex justify-content-center mb-3">
                  <div className="m-2">
                    <p>Quantidade:</p>
                    <input
                      type="number"
                      className="qtyProduct"
                      min="1"
                      defaultValue={1}
                      max={prod.stock_qty}
                      onChange={(e) => setQtyProduct(Number(e.target.value))}
                    />
                  </div>
                </div>
                <input
                  className="btn"
                  id="btnBuy"
                  type="reset"
                  onClick={() =>
                    HandleAddProduct(
                      prod.id,
                      prod.name,
                      prod.price,
                      prod.stock_qty
                    )
                  }
                  value="Adicionar ao Carrinho"
                />
              </form>
            );
          }
        })
      ) : (
        <span className="col-12 text-align-center mb-5 mt-5">Loading...</span>
      )}
    </>
  );
}

export default Products;
