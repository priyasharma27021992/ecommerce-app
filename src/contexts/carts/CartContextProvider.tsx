import { ICartProduct, ICartTotal } from "../../models";
import { useContext, createContext, ReactNode, useState, FC } from "react";

export interface ICartContext {
  isOpen: boolean;
  setIsOpen(state: boolean): void;
  products: ICartProduct[];
  setProducts(products: ICartProduct[]): void;
  total: ICartTotal;
  setTotal(products: any): void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

const totalInitialValues = {
  productQuantity: 0,
  totalPrice: 0,
  currencyFormat: "$",
};

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider: FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

  const CartContextValue: ICartContext = {
    isOpen,
    setIsOpen,
    products,
    setProducts,
    total,
    setTotal,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartContext };
