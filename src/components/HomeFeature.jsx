import React from 'react';
import Speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { Link } from 'react-router-dom';

const HomeFeature = () => {
  return (
    <div className="max-w-[1090px] mx-auto mt-24 px-4">
      <div className="bg-primary rounded-lg p-6 md:p-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={Speaker}
            alt="ZX9 Speaker"
            className="object-contain w-full h-auto max-h-[500px] mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center -mt-16 lg:text-left flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 space-x-2 flex md:flex-col md:space-y-2 flex-row">
            <span>ZX9</span>
            <span>Speaker</span>
          </h2>
          <p className="text-white text-base md:text-lg mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link 
            to='/speakers'
            className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition"
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
