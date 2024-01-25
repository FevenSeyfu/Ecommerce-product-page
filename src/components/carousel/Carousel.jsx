import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageChange = (img) => {
    setSelectedImage(img);
  };
  const previousImg = () => {
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(currentIndex === 0 ? images[images.length - 1] : images[currentIndex - 1]);
  };
  
  const nextImg = () => {
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(currentIndex === images.length - 1 ? images[0] : images[currentIndex + 1]);
  };
  
  return (
    <div className="flex flex-col items-center justify-center md:w-2/4 md:p-8">
      <div className="relative h-[20rem] w-full md:w-[20rem] mx-auto  overflow-hidden">
        <img
          className="h-full w-full object-cover md:rounded-lg"
          src={selectedImage}
          alt="Selected Product"
        />
      </div>
      <div className="md:hidden">
        <button onClick={previousImg}>
          <img
            src="src/assets/icon-previous.svg"
            alt="Previous button"
            className="bg-white absolute top-[12rem] left-[1rem] rounded-full px-4 py-3"
          />
        </button>
        <button onClick={nextImg}>
          <img
            src="src/assets/icon-next.svg"
            alt="Next button"
            className="bg-white absolute top-[12rem] right-[1rem] rounded-full px-4 py-3"
          />
        </button>
      </div>

      {/* desktop carousel selector */}
      <ul className="hidden md:flex justify-center w-full mt-4">
        {images.map((img, index) => (
          <li
            key={index}
            className={`mx-2 h-16 w-16 ${
              selectedImage === img
                ? "border-2 border-primary-orange rounded-lg"
                : ""
            }  cursor-pointer`}
            onClick={() => handleImageChange(img)}
          >
            <img
              className={`h-full w-full object-cover rounded-md hover:opacity-80 ${
                selectedImage === img ? "opacity-50" : ""
              }`}
              src={img}
              alt={`Product ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
