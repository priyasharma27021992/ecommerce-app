import Logo from "../assets/logo.svg";
import User from "../assets/user.svg";
import Cart from "../assets/cart.svg";
import Wishlist from "../assets/wishlist.svg";
import MenuSvg from "../assets/menu.svg";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 sticky top-0 z-50">
      <div className="relative flex">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="h-14 w-14 md:h-20 md:w-20 p-2"
            src={Logo}
            alt="Your SVG"
          />
          <div className="font-semibold text-xl hidden md:block">
            Find Your Shoes
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={openMenu}
            onClick={toggle}
          >
            <span className="sr-only">Open main menu</span>
            <img src={MenuSvg} alt="Your SVG" />
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto flex-grow lg:flex lg:items-center lg:w-auto ${
            openMenu ? "block absolute top-11" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-row p-4 md:p-0 ${
              openMenu &&
              "mt-4 border-gray-100 rounded-lg border bg-gray-50 flex-col md:space-x-8 md:mt-0 md:border-0 md:bg-white"
            }`}
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black md:text-white"
                aria-current="page"
              >
                Women
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black md:text-white">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black md:text-white">
                Kids
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <a
            href="#"
            className="inline-block text-teal-200 hover:text-white text-sm p-2"
          >
            <img
              className="h-6 w-6 md:h-10 md:w-10"
              src={User}
              alt="Your SVG"
            />
            Profile
          </a>
          <a
            href="#"
            className="inline-block text-teal-200 hover:text-white text-sm p-2"
          >
            <img
              className="h-6 w-6 md:h-10 md:w-10"
              src={Wishlist}
              alt="Your SVG"
            />
            Wishlist
          </a>
          <a
            href="#"
            className="inline-block text-teal-200 hover:text-white text-sm p-2"
          >
            <img
              className="h-6 w-6 md:h-10 md:w-10"
              src={Cart}
              alt="Your SVG"
            />
            User
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
