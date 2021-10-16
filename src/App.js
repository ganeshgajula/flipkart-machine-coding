import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductListing } from "./pages/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
