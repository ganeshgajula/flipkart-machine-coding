import React from "react";
import { useProducts } from "../../context/ProductsProvider";

export const Products = () => {
  const {
    data: { products, sortBy, sizes, brands, gender },
  } = useProducts();

  const getSortedProducts = (products, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return products.sort((a, b) => b.discountPrice - a.discountPrice);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return products.sort((a, b) => a.discountPrice - b.discountPrice);
    }

    return products;
  };

  const filterBySize = (products, sizes) => {
    if (sizes.length === 0) {
      return products;
    }

    return products.filter(({ size }) =>
      size.find((size) => size === sizes[sizes.length - 1])
    );
  };

  const filterByBrand = (products, brands) => {
    if (brands.length === 0) {
      return products;
    }

    return products.filter(({ brand }) =>
      brands.find((brandName) => brandName === brand)
    );
  };

  const filterByGender = (products, gender) => {
    if (gender.length === 0) {
      return products;
    }

    return products.filter((product) =>
      gender.find((gender) => gender === product.gender)
    );
  };

  const sortedProducts = getSortedProducts(products, sortBy);
  const filteredBySize = filterBySize(sortedProducts, sizes);
  const filteredByBrand = filterByBrand(filteredBySize, brands);
  const filteredByGender = filterByGender(filteredByBrand, gender);

  return (
    <div className="max-w-full ml-96 grid grid-cols-4 gap-8">
      {filteredByGender.map(
        ({
          id,
          brand,
          description,
          discountPrice,
          actualPrice,
          discountPercent,
          size,
          image,
        }) => (
          <div key={id}>
            <img src={image} alt="product" className="w-48 h-64" />
            <p className="mt-2">{brand}</p>
            <p>{description}</p>
            <div className="flex items-center gap-3">
              <span>Rs {discountPrice}</span>
              <span className="line-through text-sm">{actualPrice}</span>
              <span className="text-green-400 text-sm">
                {discountPercent} off
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Size</span>
              <ul className="flex gap-3">
                {size.map((size) => (
                  <li key={size}>{size}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  );
};
