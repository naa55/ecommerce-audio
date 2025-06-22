import Img1 from './assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import firstImg1 from './assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import firstImg2 from './assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import firstImg3 from './assets/product-yx1-earphones/desktop/image-gallery-3.jpg';
import headphone from './assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import SpeakerImg from './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import Img5 from './assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';

export const itemsList = [
    {
        id: 5,
        name: "YX1 Wireless",
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        img: Img1,
        price: 599,
        features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        includes: [
            {
                quantity: 2,
                item: "Earphone unit"
            },
            {
                quantity: 6,
                item: "Multi-size earplugs"
            },
            {
                quantity: 1,
                item: "User manual"
            },
            {
                quantity: 1,
                item: "USB-C charging cable"
            },
            {
                quantity: 1,
                item: "Travel pouch"
            }
        ],
        gallery: [
            {
                id: 1,
                img: firstImg1
            },
            {
                id: 2,
                img: firstImg2
            },
            {
                id: 3,
                img: firstImg3
            }
        ],
        others: [
            {
                id: 1,
                name: "XX99 Mark II",
                image: headphone
            },
            {
                id: 2,
                name: "XX59",
                image: Img5
            },
            {
                id: 4,
                name: "ZX9 Speaker",
                image: SpeakerImg
            }
        ]

    },

];