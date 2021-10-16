import React from "react";
import { Navbar, Filters, Products } from "../../components";

export const ProductListing = () => {
  return (
    <>
      <Navbar />
      <div className="mt-6 flex gap-10 mb-4">
        <Filters />
        <Products />
      </div>
    </>
  );
};
