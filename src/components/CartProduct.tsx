import useCart from "../contexts/carts/useCart";
import { ICartProduct } from "../models";

type CartProductProps = {
  cartProduct: ICartProduct;
};
const CartProduct = ({ cartProduct }: CartProductProps) => {
  const { title, price, color, currencyFormat, quantity } = cartProduct;
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={`src/assets/products/shoes-1.png`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{title}</h3>
            <p className="ml-4">
              {currencyFormat}
              {price}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              id="decrement-button"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-7 focus:ring-gray-100 focus:ring-2 focus:outline-none disabled:border-0 disabled:cursor-not-allowed"
              disabled={cartProduct.quantity <= 1}
              onClick={() => decreaseProductQuantity(cartProduct)}
            >
              <svg
                className="w-3 h-3 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <p className="bg-gray-50 border-x-0 border-gray-300 h-7 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 py-1 px-2.5">
              {quantity}
            </p>
            <button
              type="button"
              id="increment-button"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-7 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              onClick={() => increaseProductQuantity(cartProduct)}
            >
              <svg
                className="w-3 h-3 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeProduct(cartProduct)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
