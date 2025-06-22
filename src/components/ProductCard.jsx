import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({item, index, title}) => {
  return (
     <div
          key={item.id}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          } items-center gap-10 lg:gap-20 min-h-[350px]`}
        >
          <div className="flex-1 flex justify-center items-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start max-w-lg">
            {index % 2 !== 0 && <div className="lg:hidden w-full" />}
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
              {item.name}
            </h2>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <Link to={`/${title}/product/${item.id}`} className="bg-orange-500 text-white py-3 px-8 uppercase tracking-widest hover:bg-orange-600 transition">
              See Product
            </Link>
            {index % 2 === 0 && <div className="lg:hidden w-full" />}
          </div>
        </div>
  )
}

export default ProductCard