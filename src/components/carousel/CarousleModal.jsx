import React, { useState } from "react";
import Modal from "react-modal";
import IconPrevious from "../icon/IconPrevious";
import IconNext from "../icon/IconNext";
import IconClose from "../icon/IconClose";

Modal.setAppElement("#root");

const CarousleModal = ({ images, toggleView, toggleModal }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
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
  return (
    <Modal
      isOpen={toggleView}
      contentLabel="product preview"
      onRequestClose={toggleModal}
      className="ProductModal bg-transparent  w-[60vw]"
      style={{
        border: 0,
        transition: "none",
      }}
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center"
      shouldCloseOnOverlayClick={true}
    >
      <>
        <div className="relative h-[25rem] md:w-[30rem] mx-auto ">
          <button onClick={toggleModal} className="absolute top-[-2rem] right-0">
            <IconClose />
          </button>
          <img
            className="h-full w-full object-cover md:rounded-lg"
            src={selectedImage}
            alt="Selected Product"
          />
          <button
            onClick={previousImg}
            className="absolute top-[11rem] left-[-1.5rem] bg-white rounded-full p-4"
          >
            <IconPrevious />
          </button>
          <button
            onClick={nextImg}
            className="absolute top-[11rem] right-[-1.5rem] bg-white rounded-full p-4"
          >
            <IconNext />
          </button>
        </div>

        {/* carousel slider */}
        <ul className="hidden md:flex justify-center w-full mt-4">
          {images.map((img, index) => (
            <li
              key={index}
              className={`mx-3 h-20 w-20 ${
                selectedImage === img
                  ? "border-2 border-primary-orange rounded-lg"
                  : ""
              } cursor-pointer`}
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
      </>
    </Modal>
  );
};

export default CarousleModal;
