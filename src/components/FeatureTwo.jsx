import React from 'react';
import Img from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import { Link } from 'react-router-dom';

const FeatureTwo = () => {
    return (
        <div className="max-w-[1090px] mx-auto mt-24 px-4">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                    <img
                        src={Img}
                        alt="YX1 Earphones"
                        className="object-cover w-full h-full aspect-[4/3]"
                    />
                </div>
                <div className="w-full lg:w-1/2 order-2 lg:order-1 bg-gray-100 rounded-lg p-6 md:p-10 flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center">
                    <p className="text-xl font-semibold mb-6">YX1 EARPHONES</p>
                    <Link
                        to="/earphones"
                        className="border border-black py-3 px-10 w-max hover:bg-black hover:text-white transition"
                    >
                        See Product
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureTwo;
