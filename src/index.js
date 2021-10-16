import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ProductsProvider } from "./context/ProductsProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
