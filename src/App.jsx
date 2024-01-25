import React from "react";
import Navbar from "./components/navbar/Navbar";
import ProductDescription from "./components/ProductDescription";
import Carousel from "./components/carousel/Carousel";
import cart from "./cart.js"
const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      {cart.map((item) => (
      <div className="flex flex-col w-full  md:flex-row h-screen" key={item.id}>
        <Carousel images={item.images}/>
        <ProductDescription item={item}/>
      </div>
       ))}
      <footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/FevenSeyfu">FevenSeyfu</a>.
      </footer>
    </div>
  );
};

export default App;
