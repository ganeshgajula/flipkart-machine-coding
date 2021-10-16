import { createContext, useContext, useReducer } from "react";
import products from "../data/products.json";
import { productsReducer } from "../reducer/productsReducer";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const initialState = {
    products,
    sortBy: null,
    sizes: [],
    brands: [],
    gender: [],
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider
      value={{ data: state, productsDispatch: dispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
