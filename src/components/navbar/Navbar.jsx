import React, { useState } from "react";
import CartIcon from "./CartIcon";
import Modal from "react-modal";
import CartModal from "./CartModal";

Modal.setAppElement("#root");

const Navbar = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a  durable rubber outer sole, they'll withstand everything the weather can offer.",
      img: "src/assets/image-product-1-thumbnail.jpg",
      price: 125.0,
      quantity: 3,
      discount: 50,
    },
  ]);
  const [nav, setNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  // toggle mobile menu
  const handleClick = () => setNav(!nav);

  const HandleToggleCart = () => setToggleCart(!toggleCart);
  return (
    <>
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
          <button onClick={HandleToggleCart} className="z-5">
            <CartIcon itemCount={itemCount} />
          </button>
          <img
            src="src/assets/image-avatar.png"
            alt="user avatar"
            className="h-8"
          />
        </div>
      </div>
      {toggleCart && <CartModal cart={cart} />}
    </>
  );
};

export default Navbar;
