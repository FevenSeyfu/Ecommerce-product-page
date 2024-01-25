import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageChange = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="w-2/4 flex flex-col items-center justify-center p-8">
      <div className="relative h-[20rem] w-[20rem] mx-auto rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src={selectedImage} alt="Selected Product" />
      </div>
      <ul className="flex justify-center w-full mt-4">
        {images.map((img, index) => (
          <li
            key={index}
            className={`mx-2 h-16 w-16 ${
              selectedImage === img ? 'border-2 border-primary-orange rounded-lg' : ''
            }  cursor-pointer`}
            onClick={() => handleImageChange(img)}
          >
            <img className={`h-full w-full object-cover rounded-md hover:opacity-80 ${
              selectedImage === img ? 'opacity-50' : ''
            }`} src={img} alt={`Product ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
