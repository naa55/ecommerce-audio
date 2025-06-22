import React from 'react';
import HeroImg from '../assets/home/desktop/image-hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      <img src={HeroImg} alt="Hero" loading="eager"
        className="w-full h-[400px] md:h-[600px] object-cover" />
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-24 text-white text-center md:text-left">
        <div className="max-w-lg space-y-6">
          <p className="text-sm tracking-widest text-gray-300 uppercase">New Product</p>
          <h1 className="text-xl md:text-5xl font-bold uppercase">
            XX99 Mark II Headphones
          </h1>
          <p className="text-gray-300">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Link to='/headphones' className="bg-orange-500 text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-orange-600 transition">
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
