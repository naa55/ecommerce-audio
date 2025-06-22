import Headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earbuds from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import ProductList from './ProductList';

const proudctList = [
    {
        id: 1,
        category: "Headphones",
        img: Headphone,
        link: "/headphones"
    },
    {
        id: 2,
        category: "Speakers",
        img: Speaker,
        link: "/speakers"
    },
    {
        id: 3,
        category: "Earphones",
        img: Earbuds,
        link: "/earphones"

    }
]

const Feature = () => {
    return (
        <div className='mt-[100px] flex justify-center mx-auto max-w-7xl'>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-x-20 gap-y-20 justify-center'>

                {
                    proudctList.map((product) => (
                        <ProductList key={product.id} product={product} />
                    ))
                }
            </div>
        </div>

    );
};

export default Feature;
