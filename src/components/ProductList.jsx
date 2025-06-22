import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const ProductList = ({product}) => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-100 rounded-md h-[200px] w-[300px] relative flex flex-col items-center pt-20'>
                <div className='absolute -top-12 left-1/2 transform -translate-x-1/2'>
                    <img src={product.img} alt="Headphones" height={200} width={200} />
                </div>
                <p className='mt-4 font-bold text-lg'>{product.category}</p>
                <Link to={product.link} className='text-gray-500 text-sm font-semibold flex items-center gap-1 mt-2 hover:text-amber-600'>
                    SHOP <span className='text-amber-600 text-lg'><IoIosArrowForward/></span>
                </Link>
            </div>
        </div>
    )
}

export default ProductList