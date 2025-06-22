import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

const HomeFeatureTwo = () => {
  return (
    <div className="max-w-[1090px] mx-auto mt-24 px-4">
      <div className="relative w-full rounded-lg overflow-hidden">
        {/* Full-width image */}
        <img 
          src={Img} 
          alt="ZX7 Speaker" 
          className="w-full h-[300px] object-cover"
        />
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:pl-24 text-center lg:text-left">
          <div className=" bg-opacity-0 p-6 md:p-8 rounded-lg max-w-md">
            <p className="text-2xl md:text-4xl font-bold mb-6 tracking-wider">ZX7 SPEAKER</p>
            <Link 
              to="/speakers" 
              className="inline-block border-2 border-black px-6 py-3 text-sm font-bold tracking-wider hover:bg-black hover:text-white transition"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureTwo;