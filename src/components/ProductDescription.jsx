import React, { useState } from "react";
import IconCart from "./icon/IconCart";

const ProductDescription = ({ item }) => {
  const [count, setCount] = React.useState(item.quantity);
  let OriginalPrice = (item.price / (1 - item.discount / 100)).toFixed(2);

  const addItem = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const removeItem = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  return (
    <div className="w-full md:w-3/6 h-full flex flex-col items-start justify-center p-4">
      <div className="md:w-[30rem] flex flex-col gap-2 md:gap-4">
        <h2 className="text-md md:text-lg text-primary-orange font-bold uppercase">
          {item.company}
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold">{item.name}</h1>
        <p className="text-md text-gray-600 md:leading-relaxed">
          {item.description}
        </p>

        <div className="flex gap-4 items-center">
          <div>
            <p className="font-bold text-xl">${item.price.toFixed(2)}</p>
          </div>
          <span className="self-start px-2 inline-flex items-center bg-primary-pale-orange text-primary-orange font-bold">
            {item.discount}%
          </span>
          <p className="text-gray-400 text-sm line-through absolute right-4 md:hidden">
              ${OriginalPrice}
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-2">
          <div className="flex flex-row  justify-center items-center bg-gray-100 w-full md:w-2/3 ">
            <button
              disabled={count === 0}
              className="w-1/3 h-12 md:h-full hover:border hover:border-gray-200 hover:shadow-lg"
              onClick={removeItem}
            >
              <img
                src="src/assets/icon-minus.svg"
                alt="Minus Icon"
                className="mx-auto"
              />
            </button>
            <span className="w-1/3 text-center">
              <p>{count}</p>
            </span>
            <button
              className="w-1/3 h-full hover:border hover:border-gray-200 hover:shadow-lg"
              onClick={addItem}
            >
              <img
                src="src/assets/icon-plus.svg"
                alt="Plus Icon"
                className="mx-auto"
              />
            </button>
          </div>
          <button className="w-full h-12 md:h-full px-2 py-4 bg-primary-orange text-white text-xl font-bold rounded-lg  hover:bg-primary-pale-orange flex flex-row items-center justify-center">
            <IconCart fillColor={"white"} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
