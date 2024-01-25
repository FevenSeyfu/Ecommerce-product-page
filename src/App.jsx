import React from "react";
import Navbar from "./components/navbar/Navbar";
import ProductDescription from "./components/ProductDescription";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row bg-red-200 h-screen">
        <Carousel />
        <ProductDescription />
      </div>
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
