import { useEffect } from "react";
import Products from "../components/Products";
import useProducts from "../contexts/products/useProducts";

const Home = () => {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Home;
