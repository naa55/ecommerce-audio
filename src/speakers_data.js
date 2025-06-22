import Img1 from './assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';
import Img2 from './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import firstImg1 from './assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import firstImg2 from './assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import firstImg3 from './assets/product-zx7-speaker/desktop/image-gallery-3.jpg';
import SpeakerImg from './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import Img5 from './assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import secondImg1 from './assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import secondImg2 from './assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import secondImg3 from './assets/product-zx9-speaker/desktop/image-gallery-3.jpg';
import headphone from './assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';

export const itemsList = [
    {
        id: 3,
        name: "ZX7",
        description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        img: Img1,
        price: 3500,
        features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",

        includes: [
            {
                quantity: 2,
                item: "Speaker unit"
            },
            {
                quantity: 2,
                item: "Speaker cloth panel"
            },
            {
                quantity: 1,
                item: "User manual"
            },
            {
                quantity: 1,
                item: "3.5mm 7.5m audio cable"
            },
            {
                quantity: 1,
                item: "7.5m optical cable"
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
                name: "ZX7",
                image: Img2
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
    {
        id: 4,
        name: "ZX9",
        description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        img: Img2,
        price: 4500,
        features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",

        includes: [
            {
                quantity: 2,
                item: "Speaker unit"
            },
            {
                quantity: 2,
                item: "Speaker cloth panel"
            },
            {
                quantity: 1,
                item: "User manual"
            },
            {
                quantity: 1,
                item: "3.5mm 10m audio cable"
            },
            {
                quantity: 1,
                item: "10m optical cable"
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
                name: "XX99 Mark II",
                image: headphone
            },
            {
                id: 5,
                name: "YX1 Wireless",
                image: Img5
            },
            {
                id: 4,
                name: "ZX7",
                image: Img1
            }
        ]
    },
];