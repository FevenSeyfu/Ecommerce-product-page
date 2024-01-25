import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const CartModal = ({ cart }) => {
  return (
    <div className="absolute top-[5rem] md:top-[4rem] mx-2 rounded-2xl shadow-2xl shadow-neutral-700  w-[95vw] md:right-0 md:w-[25rem] bg-white h-[14rem] z-10">
      <h1 className="h-16 p-4 font-extrabold text-2xl text-black">Cart</h1>
      <hr className="w-full shadow-md text-gray-900 " />
      <div className="flex flex-col items-center ">
        {cart.length === 0 ? (
          <h1 className="text-lg text-gray-500 font-bold my-12">
            Your Cart is empty.
          </h1>
        ) : (
          <div className="m-4">
            {cart.map((item) => (
              <ul className="flex flex-col w-full" key={item.id}>
                <li className="flex flex-row justify-between items-center gap-4 text-gray-500 text-md">
                  <img
                    src={item.img}
                    alt="product image"
                    className="h-12 rounded-md"
                  />
                  <div className="flex flex-col">
                    <p>{item.name}</p>
                    <p>
                      ${item.price.toFixed(2) } x {item.quantity}{" "}
                      <span className="font-bold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button>
                      <FaRegTrashCan className="text-gray-400 text-xl hover:text-gray-800"/>
                    </button>
                </li>
              </ul>
            ))}
            <button className="w-full p-2 bg-primary-orange text-white text-xl font-bold rounded-lg mt-4 hover:bg-primary-pale-orange">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
