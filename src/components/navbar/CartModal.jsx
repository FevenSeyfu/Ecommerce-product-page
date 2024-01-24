import React from "react";

const CartModal = ({ cart }) => {
  return (
    <div className="absolute top-[5rem] mx-2 rounded-2xl shadow-2xl shadow-neutral-700  w-[95vw] md:right-4 md:w-[25rem] bg-white h-[13rem] z-10">
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
              <ul className="flex flex-col" key={item.id}>
                <li className="flex flex-row justify-between gap-4">
                  <img
                    src={item.img}
                    alt="product image"
                    className="h-12 rounded-md"
                  />
                  <div className="flex flex-col">
                    <p>{item.name}</p>
                    <p>
                      ${item.price}x{item.quantity}{" "}
                      <span className="font-bold">
                        ${item.price * item.quantity}
                      </span>
                    </p>
                    <button></button>
                  </div>
                </li>
              </ul>
            ))}
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
