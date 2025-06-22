import React from 'react'

const DetailsFeature = ({ feature, includes }) => {
    return (
        <div className="mt-24 p-4">
            {/* Features Section */}
            <div>
                <h1 className="mb-6 text-2xl font-bold uppercase md:text-3xl">FEATURES</h1>
                <div>
                    <p className="whitespace-pre-line text-neutral-500">{feature}</p>
                </div>
            </div>

            <div className='grid gap-2 md:gap-12 lg:grid-cols-2 lg:gap-12 mt-14'>
                <h1 className="mb-6 text-2xl font-bold uppercase md:text-3xl lg:mb-14">IN THE BOX</h1>
                <div className="space-y-2">
                    {includes.map((item, index) => (
                        <div key={index} className="flex gap-6">
                            <p className="font-bold text-primary-500 text-primary">{item.quantity}x</p>
                            <p className="text-neutral-500">{item.item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailsFeature