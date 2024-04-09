import { ICartProduct } from "../../models";
import { useCartContext } from "./CartContextProvider";

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (products: ICartProduct[]) => {
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity;
        return sum;
      },
      0
    );

    const totalPrice = products.reduce((sum: number, product: ICartProduct) => {
      sum += product.price * product.quantity;
      return sum;
    }, 0);

    const total = {
      productQuantity,
      totalPrice,
      currencyFormat: "$",
    };

    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
  };
};

export default useCartTotal;
