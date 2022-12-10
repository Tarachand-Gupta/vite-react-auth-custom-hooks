import { useEffect, useState } from "react";
import { PRODUCTS } from "./data";

export const useProduct = () => {
  const Products = PRODUCTS;
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [product, setProduct] = useState(PRODUCTS[currentProductIndex]);

  function nextProduct() {
    currentProductIndex < Products.length - 1
      ? setCurrentProductIndex(currentProductIndex + 1)
      : null;
  }

  function previousProduct() {
    currentProductIndex < Products.length && currentProductIndex > 0
      ? setCurrentProductIndex(currentProductIndex - 1)
      : null;
  }

  useEffect(() => {
    setProduct(PRODUCTS[currentProductIndex]);
  }, [currentProductIndex]);

  return [product, nextProduct, previousProduct];
};
