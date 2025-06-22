import React from 'react'
import BestImg from "../assets/shared/desktop/image-best-gear.jpg"

const FeatureFour = () => {
  return (
    <div className='container mx-auto px-6 mt-24 mb-32 md:px-10 lg:px-20'>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-1/2 lg:py-16'>
          <h1 className='text-3xl md:text-4xl font-bold uppercase mb-8 leading-tight'>
            Bringing you the <span className='text-primary'>best</span> audio gear
          </h1>
          <p className='text-neutral-500'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className='w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden rounded-lg'>
          <img 
            src={BestImg} 
            alt="Img" 
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureFour