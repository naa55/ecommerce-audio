import React from 'react'

const Gallery = ({ gallery }) => {
    return (
        <div className="space-y-5 md:space-y-8 p-4 mt-24">
            <div
                className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 md:gap-8"
            >
                {/* Left side - stacked images */}
                <div className="grid gap-5 md:gap-8">
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src={gallery[0].img}
                            alt="Img"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src={gallery[1].img}
                            alt="Img"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right side - single image matching left height */}
                <div className="rounded-lg overflow-hidden">
                    <img
                        src={gallery[2].img}
                        alt="Img"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery