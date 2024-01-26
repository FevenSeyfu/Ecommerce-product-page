<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <img src="https://github.com/FevenSeyfu/Ecommerce-product-page/blob/main/screenshots/Desktop.png" alt="Desktop" style="width: 48%; height: auto;">
  <img src="https://github.com/FevenSeyfu/Ecommerce-product-page/blob/main/screenshots/mobile_1.png" alt="Mobile" style="width: 48%; height: auto;">
</div>

# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).It is a responsive product page with interactive active states and responsive components.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [Repository](https://github.com/FevenSeyfu/Ecommerce-product-page)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build Tool

### What I learned

while building this solution I have learned to effectively use react-modal and styling with tailwind to produce the lightbox gallery for the product image,handling closing and opening of Modal and aligning items.icons relative to an image.

```js
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
      </>
    </Modal>
```

### Continued development
On this project I plan to expand by adding

- Refactor to Add state management with context/react toolkit
- Add a backend api to manage e-commerce inventory

## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech/)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Twitter - [@FevenSeyfu](https://www.twitter.com/FevenSeyfu)
- Linkedin - [Feven Seyfu](https://www.linkedin.com/in/fevenseyfu/)


## Acknowledgments

I would like to thank for providing the  challenge and the design and resource. 
