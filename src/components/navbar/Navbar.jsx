import React,{useState} from "react";
import CartIcon from "./CartIcon";

const Navbar = () => {
    const [cart,setCart] = useState([
        {
            id:1,
            item:'shoe'
        },
        {
            id:1,
            item:'shoe'
        },
        {
            id:1,
            item:'shoe'
        }
    ]);

  return (
    <div className="flex flex-row justify-between items-center px-8 py-4 md:py-6 border-b shadow-md shadow-gray-50">
      <div className="flex flex-row gap-4 md:gap-6 items-center">
        <img
          src="src/assets/icon-menu.svg"
          alt="Humber menu"
          className="md:hidden"
        />
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
