import React from 'react'
import Navbar from './components/navbar/Navbar';
import ProductDescription from './components/ProductDescription';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-row '>
        <Carousel />
        <ProductDescription />
      </div>
    </div>
  )
}

export default App;