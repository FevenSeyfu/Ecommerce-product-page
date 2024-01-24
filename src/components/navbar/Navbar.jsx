import React, { useState } from "react";
import CartIcon from "./CartIcon";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Navbar = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      item: "shoe",
    },
    {
      id: 1,
      item: "shoe",
    },
    {
      id: 1,
      item: "shoe",
    },
  ]);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex flex-row justify-between items-center px-8 py-4 md:py-6 border-b shadow-md shadow-gray-50">
      <div className="flex flex-row gap-4 md:gap-6 items-center">
        <button className="md:hidden z-10" onClick={handleClick}>
          <img
            src={`src/assets/${!nav ? "icon-menu" : "icon-close"}.svg`}
            alt="mobile menu menu"
            className="h-6"
          />
        </button>
        <Modal
          isOpen={nav}
          contentLabel="Mobile Menu"
          className={
            !nav
              ? "hidden"
              : "md:hidden absolute top-0 left-0 h-screen w-3/5 flex flex-col bg-white text-left pt-24 pl-8 "
          }
          overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          shouldCloseOnOverlayClick={true}
        >
           <ul className=" flex flex-col gap-4 font-bold text-black text-lg">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
        </Modal>
        <img src="src/assets/logo.svg" alt="logo" />

        <ul className="hidden md:flex flex-row gap-4 text-gray-700">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-4">
        {/* <img src="src/assets/icon-cart.svg" alt="cart icon" className="h-8" /> */}
        <CartIcon itemCount={cart.length} />
        <img
          src="src/assets/image-avatar.png"
          alt="user avatar"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Navbar;
