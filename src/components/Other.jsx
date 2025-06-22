import React from 'react'
import { Link } from 'react-router-dom'

const Other = ({ others, title }) => {
    return (
        <div className="mt-24 px-4 md:px-0">
            <h2 className="mb-10 text-2xl font-bold text-center uppercase md:text-3xl md:mb-16">
                YOU MAY ALSO LIKE
            </h2>

            <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-4 lg:gap-8 p-4">
                {others.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-6 rounded-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto"
                            />
                        </div>
                        <h3 className="mb-4 text-xl font-bold uppercase">
                            {item.name}
                        </h3>

                        <Link
                            to={`/${title}/products/${item.id}`}
                            className="inline-block px-6 py-3 text-sm font-medium text-white uppercase transition-colors bg-primary"
                        >
                            SEE PRODUCT
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Other