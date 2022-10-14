import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import HomePage from "./pages/HomePage";
import App from "./App";
import RequestPage from "./pages/RequestPage";
import BuyPage from "./pages/BuyPage";
import UserRegistration from "./pages/UserRegistration";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<BuyPage />} />
          <Route path="/Request" element={<RequestPage />} />
          <Route path="/UserRegistration" element={<UserRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
