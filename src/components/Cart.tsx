import useCart from "../contexts/carts/useCart";
import CartProducts from "./CartProducts";

const Cart = () => {
  const { isOpen, openCart, closeCart } = useCart();

  const toggleCartMenu = () => {
    isOpen ? closeCart() : openCart();
  };

  return (
    <div
      className={`${
        isOpen
          ? "pointer-events-none fixed bottom-0 right-0 min-h-[calc(100vh-80px)] z-10 flex"
          : "hidden"
      }`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className={`pointer-events-auto relative w-screen max-w-md`}>
        <div
          className={`absolute left-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4`}
        >
          <button
            type="button"
            className={`relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white`}
            onClick={toggleCartMenu}
          >
            <span className="sr-only">Close panel</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <CartProducts />
      </div>
    </div>
  );
};

export default Cart;
