import React, { useState } from "react";
import IconPrevious from "../icon/IconPrevious";
import IconNext from "../icon/IconNext";
import CarousleModal from "./CarousleModal";

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [toggleView, setToggleView] = useState(false);

  const handleImageChange = (img) => {
    setSelectedImage(img);
  };
  const previousImg = () => {
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(
      currentIndex === 0 ? images[images.length - 1] : images[currentIndex - 1]
    );
  };

  const nextImg = () => {
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(
      currentIndex === images.length - 1 ? images[0] : images[currentIndex + 1]
    );
  };

  const toggleModal = () => {
    setToggleView(!toggleView);
  };
  return (
    <div className="flex flex-col items-center justify-center md:w-2/4 md:p-8">
      <div className="relative h-[16rem]  w-full md:shadow-md shadow-gray-400 md:h-[20rem] md:w-[40vw] md:rounded-lg mx-auto  overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={selectedImage}
          alt="Selected Product"
          onClick={() => {
            if (window.innerWidth > 768) {
              toggleModal();
            }
          }}
        />
        <CarousleModal images={images} toggleView={toggleView} toggleModal={toggleModal} />
      </div>
      <div className="md:hidden">
        <button
          onClick={previousImg}
          className="bg-white  absolute top-[12rem] left-[1rem] rounded-full p-4"
        >
          <IconPrevious />
        </button>
        <button
          onClick={nextImg}
          className="bg-white  absolute top-[12rem] right-[1rem] rounded-full p-4"
        >
          <IconNext />
        </button>
      </div>

      {/* desktop carousel selector */}
      <ul className="hidden md:flex justify-center w-full mt-4">
        {images.map((img, index) => (
          <li
            key={index}
            className={`mx-3 h-20 w-24 ${
              selectedImage === img
                ? "border-2 border-primary-orange rounded-lg"
                : ""
            }  cursor-pointer`}
            onClick={() => handleImageChange(img)}
          >
            <img
              className={`h-full w-full object-cover rounded-md hover:opacity-50 ${
                selectedImage === img ? "opacity-30" : ""
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
