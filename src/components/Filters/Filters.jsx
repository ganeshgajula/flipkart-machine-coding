import React from "react";
import { useProducts } from "../../context/ProductsProvider";
import { isItemPresent } from "../../utils/utils";

export const Filters = () => {
  const {
    data: { sortBy, sizes, brands, gender },
    productsDispatch,
  } = useProducts();

  const filterBySizeHandler = (sizes, selectedSize) =>
    !isItemPresent(sizes, selectedSize)
      ? productsDispatch({ type: "ADD_SELECTED_SIZE", payload: selectedSize })
      : productsDispatch({
          type: "REMOVE_SELECTED_SIZE",
          payload: selectedSize,
        });

  const filterByBrandHandler = (brands, brandName) => {
    !isItemPresent(brands, brandName)
      ? productsDispatch({ type: "ADD_SELECTED_BRAND", payload: brandName })
      : productsDispatch({ type: "REMOVE_SELECTED_BRAND", payload: brandName });
  };

  const filterByGenderHandler = (gender, genderType) => {
    !isItemPresent(gender, genderType)
      ? productsDispatch({ type: "ADD_SELECTED_GENDER", payload: genderType })
      : productsDispatch({
          type: "REMOVE_SELECTED_GENDER",
          payload: genderType,
        });
  };

  return (
    <div className="max-w-xs flex flex-col justify-between fixed left-7">
      <div className="flex flex-col">
        <p className="pb-1 mb-2 border-b-2">Sort By</p>
        <label>
          <input
            type="radio"
            onChange={() =>
              productsDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            className="mr-2"
          />
          Price - High to Low
        </label>
        <label>
          <input
            type="radio"
            onChange={() =>
              productsDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            className="mr-2"
          />
          Price - Low to High
        </label>
      </div>
      <div className="flex items-center justify-between  mt-10 mb-4 border-b-2 pb-1">
        <span>Filters</span>
        <span
          className="text-xs font-semibold text-blue-600 cursor-pointer"
          onClick={() => productsDispatch({ type: "RESET_FILTERS" })}
        >
          CLEAR ALL
        </span>
      </div>
      <div className="flex flex-col items-start mb-4">
        <p className="mb-2">SIZE</p>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterBySizeHandler(sizes, "S")}
            checked={isItemPresent(sizes, "S") ? true : false}
          />
          S
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterBySizeHandler(sizes, "M")}
            checked={isItemPresent(sizes, "M") ? true : false}
          />
          M
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterBySizeHandler(sizes, "L")}
            checked={isItemPresent(sizes, "L") ? true : false}
          />
          L
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterBySizeHandler(sizes, "XL")}
            checked={isItemPresent(sizes, "XL") ? true : false}
          />
          XL
        </label>
      </div>

      <div className="flex flex-col items-start mb-4">
        <p className="mb-2">BRAND</p>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByBrandHandler(brands, "FastColors")}
            checked={isItemPresent(brands, "FastColors") ? true : false}
          />
          FastColors
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByBrandHandler(brands, "Seven Rocks")}
            checked={isItemPresent(brands, "Seven Rocks") ? true : false}
          />
          Seven Rocks
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByBrandHandler(brands, "Bike")}
            checked={isItemPresent(brands, "Bike") ? true : false}
          />
          Bike
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByBrandHandler(brands, "Selvia")}
            checked={isItemPresent(brands, "Selvia") ? true : false}
          />
          Selvia
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByBrandHandler(brands, "Fab Star")}
            checked={isItemPresent(brands, "Fab Star") ? true : false}
          />
          Fab Star
        </label>
      </div>

      <div className="flex flex-col items-start mb-4">
        <p className="mb-2">IDEAL FOR</p>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByGenderHandler(gender, "men")}
            checked={isItemPresent(gender, "men") ? true : false}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => filterByGenderHandler(gender, "women")}
            checked={isItemPresent(gender, "women") ? true : false}
          />
          Women
        </label>
      </div>
    </div>
  );
};
