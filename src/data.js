import img1 from "./assets/m1.webp";
import img2 from "./assets/m2.webp";
import img3 from "./assets/m3.webp";
import img4 from "./assets/m4.webp";
import img5 from "./assets/m5.webp";
import img6 from "./assets/m6.webp";


export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export const ITEMS = [
    {
        id: 1,
        productName: "air-jordan-10-retro-orlando",
        productImage: img1,
        description: "Some description about product",
        price: 1200,
    },
    {
        id: 2,
        productName: "Jordan 1 Mid Shattered ",
        productImage: img2,
        description: "Some description about product",
        price: 950,
    },
    {
        id: 3,
        productName: "Jordan 2 Retro Melo (2018)",
        productImage: img3,
        description: "Some description about product",
        price: 400,
    },
    {
        id: 4,
        productName: "jordan-10-og-steel-1994",
        productImage: img4,
        description: "Some description about product",
        price: 840,
    },
    {
        id: 5,
        productName: "jordan-10-retro-steel-2013",
        productImage: img5,
        description: "Some description about product",
        price: 2000,
    },
    {
        id: 6,
        productName: "Jordan 4 Retro Kaws",
        productImage: img6,
        description: "Some description about product",
        price: 1150,
    },

]