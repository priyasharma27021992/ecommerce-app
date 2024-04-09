import useCart from "../contexts/carts/useCart";
import CartProduct from "./CartProduct";

const CartProducts = () => {
  const { products = [] } = useCart();
  return (
    <div
      className={`flex flex-col h-full overflow-y-scroll bg-white p-6 shadow-xl`}
    >
      <div className="px-4 sm:px-6">
        <h2 className="text-center text-base font-semibold leading-6 text-gray-900">
          Shopping Cart
        </h2>
      </div>
      <div className="mt-6">
        {products.length === 0 ? (
          <div>Empty here </div>
        ) : (
          <ul role="list">
            {products.map((product) => (
              <CartProduct cartProduct={product} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
