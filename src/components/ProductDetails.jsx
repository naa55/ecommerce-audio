import React, { useState } from 'react'
import { useCart } from '../context/CartContext';

const ProductDetails = ({ product }) => {

    const [count, setCount] = useState(1);
    const { addToCart } = useCart();

    const handleCart = () => {
        if (count <= 0) return;
        const itemWithQuantity = {
            ...product,
            quantity: count,
        };
        addToCart(itemWithQuantity);
    };
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 min-h-[350px]">
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full max-w-md rounded-lg shadow-lg object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
                    {product.name}
                </h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <p className="mb-6 mt-6 font-bold">${product.price}</p>

                <div className="flex flex-col sm:flex-row items-center gap-4 cursor-pointer">
                    <div className="bg-gray-100 flex items-center justify-between px-4 py-2.5 mt-1 w-32">
                        <button
                            className="text-lg font-bold"
                            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                        >
                            -
                        </button>
                        <span className="font-semibold">{count}</span>
                        <button
                            className="text-lg font-bold"
                            onClick={() => setCount((prev) => prev + 1)}
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={handleCart}
                        disabled={count <= 0}
                        className="bg-orange-500 text-white py-3 px-8 uppercase tracking-widest hover:bg-orange-600 transition disabled:opacity-50"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails