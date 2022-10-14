import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "../pages.css";

function UserRegistration() {
  const [date, setDate] = useState();
  const [nameClient, setNameClient] = useState("");
  const [cart, setCart] = useState([]);

  const navigate = useNavigate()

  const getCart = async () => {
    const storedArr = localStorage.getItem("productCart");
    setCart(JSON.parse(storedArr));
  };


  const SubmitOrder = async () => {
    if (!nameClient || !date) {
      toast.error("Preencha todos os dados para continuar");
      return
    }else if(new Date().toLocaleDateString().split("/").reverse().join("-") >= date){
      toast.error("Data não disponivel para entrega");
      return
    }


    //CRIAÇÃO DO CLIENTE NO BD
    const body = {
      name: nameClient,
      date: date,
    };

    await axios
      .post("http://localhost:3003/orderClient", body)
      .then((resp) => {
        toast.success("Cliente criado com sucesso!");
      })
      .catch((err) => {
        toast.info("Cliente Já possui cadastro");
        return
      });

    //CRIAÇÃO DO PEDIDO DO CLIENTE NO BD
    for (let i = 0; i < cart.length; i++) {
      const body = {
        id_product: cart[i].id_product,
        name_client: nameClient,
        name_product: cart[i].name_product,
        price: cart[i].price_product,
        date: date,
        qty: cart[i].qty
      }

      await axios.post("http://localhost:3003/orderProduct",body)
      .then((resp)=>{
        toast.success("Pedido registrado com sucesso!");
      })
      .catch((err)=>{
        console.log(err.response.data.message)
        return
      })
    }

    //ATUALIZAÇÃO DO ESTOQUE
    for (let i = 0; i < cart.length; i++) {
      const body = {
        id: cart[i].id_product,
        qty: (cart[i].qty_stock - cart[i].qty === 0 ? -1 : cart[i].qty_stock - cart[i].qty)
      }

      await axios.put("http://localhost:3003/product",body)
      .then((resp)=>{
        toast.success("Estoque debitado com sucesso!");
      })
      .catch((err)=>{
        console.log(err.response.data.message)
        return
      })
    }
    const timer = setTimeout(()=>{
          localStorage.removeItem("productCart");
          navigate("/")
    }, 1500)
    return () => clearTimeout(timer)

  };

  useEffect(() => {
    getCart()
  }, []);

  // console.log(cart)

  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar />
        <div className="container" id="request-container">
          <hr />
          <div className="col-12 d-flex" id="process">
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center" id="active">
                <i className="bi bi-1-circle"></i>
                <p>Carrinho</p>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center" id="active-duo">
                <i className="bi bi-2-circle"></i>
                <p>Dados de Entrega</p>
              </div>
            </div>
          </div>

          <div id="Request">
            <div className="col-12 title-resquest">
              <h3>Insira Seus Dados</h3>
              <i className="bi bi-caret-left">
                <a href="/Request">Voltar Para O Carrinho</a>
              </i>
            </div>
          </div>

          <form id="form-user">
            <div className="form-floating mb-4">
              <label htmlFor="nome">Nome Do Cliente :</label>
              <input
                type="name"
                className="form-control"
                id="nome"
                value={nameClient}
                placeholder="Digite seu nome"
                onChange={(e) => setNameClient(e.target.value)}
              />
            </div>

            <div className="form-floating mb-5">
              <label htmlFor="dateUser">Data De Entrega :</label>
              <input
                type="date"
                className="form-control"
                id="dateUser"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <input
              type="button"
              className="btn"
              value="Enviar"
              onClick={SubmitOrder}
            />
          </form>
        </div>
        <ToastContainer />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default UserRegistration;
