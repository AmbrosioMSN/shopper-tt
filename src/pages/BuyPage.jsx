import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import "../pages.css";

function BuyPage() {
  const [page, setPage] = useState(1);

  const local = () => {
    const check = localStorage.getItem("productCart");
    if (check === null) {
      const productCart = []
      localStorage.setItem("productCart",JSON.stringify(productCart))
    }else {
      return
    }
  };

  useEffect(()=>{
    local()
  },[])

  const HandlePages = (numPage) => {
    setPage(numPage)
  };

  const HandleUpdate = (url) => {
    return;
  }

  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar HandleUpdate={HandleUpdate}/>
        <div className="container" id="product-container">
          <hr />
          <div className="row gx-md-4 d-flex" id="imageItems">
            <Products page={page} />
          </div>     
        </div>
        

        <div className="container mb-4" id="paginacao">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item focus">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => HandlePages(1)}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => HandlePages(11)}
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => HandlePages(21)}
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => HandlePages(31)}
                >
                  4
                </a>
              </li>
              <li className="page-item focus">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => HandlePages(41)}
                >
                  5
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ToastContainer/>
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default BuyPage;
