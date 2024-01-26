import React, { useState } from "react";
import CartIcon from "./CartIcon";
import IconMenu from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close.svg";
import IconLogo from "../../assets/logo.svg"; 
import AvatarImage from "../../assets/image-avatar.png"; 
import Modal from "react-modal";
import CartModal from "./CartModal";
import cart from "../../cart.js"
Modal.setAppElement("#root");

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  // toggle mobile menu
  const handleClick = () => setNav(!nav);

  const HandleToggleCart = () => setToggleCart(!toggleCart);
  return (
    <>
      <div className="flex flex-row justify-between items-center px-8 py-4 md:pt-6 md:pb-0 border-b shadow-md shadow-gray-50">
        <div className="flex flex-row gap-4 md:gap-6 items-center">
          <button className="md:hidden z-10" onClick={handleClick}>
            <img
              src={!nav ? IconMenu : IconClose }
              alt="mobile menu menu"
              className="h-6"
            />
          </button>
          {/* Mobile menu */}
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
          <img src={IconLogo} alt="logo"  className="md:pb-6"/>

          <ul className="hidden md:flex flex-row gap-4 text-gray-700">
            <li className="hover:border-b-2 hover:border-primary-orange pb-6">
              <a href="#">Collections</a>
            </li>
            <li className="hover:border-b-2 hover:border-primary-orange pb-6">
              <a href="#">Men</a>
            </li>
            <li className="hover:border-b-2 hover:border-primary-orange pb-6">
              <a href="#">Women</a>
            </li>
            <li className="hover:border-b-2 hover:border-primary-orange pb-6">
              <a href="#">About</a>
            </li>
            <li className="hover:border-b-2 hover:border-primary-orange pb-6">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={HandleToggleCart} className="z-5">
            <CartIcon itemCount={itemCount} />
          </button>
          <img
            src={AvatarImage}
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
