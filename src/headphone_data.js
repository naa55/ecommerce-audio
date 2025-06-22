import Img1 from './assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import Img2 from './assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import firstImg1 from './assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import firstImg2 from './assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import firstImg3 from './assets/product-xx59-headphones/desktop/image-gallery-3.jpg';
import SpeakerImg from './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';

import secondImg1 from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import secondImg2 from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import secondImg3 from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
import Img5 from './assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

export const itemsList = [
    {
        id: 1,
        name: "XX99 Mark II",
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        img: Img1,
        price: 2999,
        features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",

        includes: [
            {
                quantity: 1,
                item: "Headphone unit"
            },
            {
                quantity: 2,
                item: "Replacement earcups"
            },
            {
                quantity: 1,
                item: "User manual"
            },
            {
                quantity: 1,
                item: "3.5mm 5m audio cable"
            },
            {
                quantity: 1,
                item: "Travel bag"
            }
        ],
        gallery: [
            {
                id: 1,
                img: secondImg1
            },
            {
                id: 2,
                img: secondImg2
            },
            {
                id: 3,
                img: secondImg3
            }
        ],
        others: [
            {
                id: 1,
                name: "XX99 Mark I",
                image: Img1
            },
            {
                id: 2,
                name: "XX59",
                image: Img2
            },
            {
                id: 4,
                name: "ZX9 Speaker",
                image: SpeakerImg
            }
        ]

    },
    {
        id: 2,
        name: "XX59",
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        img: Img2,
        price: 899,
        features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",

        includes: [
            {
                quantity: 1,
                item: "Headphone unit"
            },
            {
                quantity: 2,
                item: "Replacement earcups"
            },
            {
                quantity: 1,
                item: "User manual"
            },
            {
                quantity: 1,
                item: "3.5mm 5m audio cable"
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
                image: Img1
            },
            {
                id: 5,
                name: "YX1 Wireless",
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