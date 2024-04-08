import { IGetProductsResponse } from "../models";

// const isProduction = process.env.NODE_ENV = "production";
export const getProducts = async () => {
  const response: IGetProductsResponse = await import(
    "../../src/static/json/products.json"
  );

  const { products } = response.data || [];
  return products;
};
