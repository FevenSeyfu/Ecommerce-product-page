import React from 'react';

const CartIcon = ({ itemCount }) => {
  return (
    <div className='relative'>
      <img src="src/assets/icon-cart.svg" alt="cart icon" className="h-8" />

      {itemCount > 0 && (
        <span className="absolute top-[-6px] right-[-6px] bg-primary-orange text-white rounded-full h-6 w-6 text-center text-md font-bold">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;