import { useCallback } from "react";
import { useProductsContext } from "./ProductsContextProvider";
import { getProducts } from "../../services/products";
import { IProduct } from "../../models";

const useProducts = () => {
  const { isFetching, setIsFetching, products, setProducts } =
    useProductsContext();

  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);
      setProducts(products);
    });
  }, [setIsFetching, setProducts]);

  return {
    isFetching,
    fetchProducts,
    products,
  };
};

export default useProducts;
