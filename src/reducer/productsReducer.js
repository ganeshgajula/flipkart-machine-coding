import products from "../data/products.json";

export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };

    case "ADD_SELECTED_SIZE":
      return {
        ...state,
        sizes: [...state.sizes, payload],
      };

    case "REMOVE_SELECTED_SIZE":
      return {
        ...state,
        sizes: state.sizes.filter((size) => size !== payload),
      };

    case "ADD_SELECTED_BRAND":
      return { ...state, brands: [...state.brands, payload] };

    case "REMOVE_SELECTED_BRAND":
      return {
        ...state,
        brands: state.brands.filter((brand) => brand !== payload),
      };

    case "ADD_SELECTED_GENDER":
      return { ...state, gender: [...state.gender, payload] };

    case "REMOVE_SELECTED_GENDER":
      return {
        ...state,
        gender: state.gender.filter((gender) => gender !== payload),
      };

    case "RESET_FILTERS":
      return {
        ...state,
        products,
        sortBy: null,
        sizes: [],
        brands: [],
        gender: [],
      };

    default:
      return state;
  }
};
