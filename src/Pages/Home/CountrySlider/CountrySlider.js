import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';


import "./CountrySlider.css";
// import required modules

import { Autoplay, FreeMode, Navigation } from "swiper";
import img1 from "../../../Assets/countries/Argentina.jpg";
import img2 from "../../../Assets/countries/Australia.png";
import img3 from "../../../Assets/countries/Austria.jpeg";
import img4 from "../../../Assets/countries/Bangladesh.jpg";
import img5 from "../../../Assets/countries/Belgium1.jpg";
import img6 from "../../../Assets/countries/Bhutan.jpg";
import img7 from "../../../Assets/countries/Brazil.jpg";
import img8 from "../../../Assets/countries/Brussel.jpg";
import img9 from "../../../Assets/countries/Canada.jpg";
import img10 from "../../../Assets/countries/China.jpg";
import img11 from "../../../Assets/countries/Croatia.jpeg";
import img12 from "../../../Assets/countries/Cuba.jpg";
import img13 from "../../../Assets/countries/Cyprus.jpg";
import img14 from "../../../Assets/countries/Czeck Republic.jpg";
import img15 from "../../../Assets/countries/Dubai.webp";
import img16 from "../../../Assets/countries/Egypt.jpg";
import img17 from "../../../Assets/countries/Finland.jpg";
import img18 from "../../../Assets/countries/France.jpg";
import img19 from "../../../Assets/countries/Germany.jpg";
import img20 from "../../../Assets/countries/Greece.jpg";



const CountrySlider = () => {
    const countriesimg = [
        {
            "id": 1,
            "name": "Argentina",
            "img": img1
        },
        {
            "id": 2,
            "name": "Australia",
            "img": img2

        },
        {
            "id": 3,
            "name": "Austria",
            "img": img3

        },
        {
            "id": 4,
            "name": "Austria",
            "img": img4

        },
        {
            "id": 5,
            "name": "Belgium",
            "img": img5

        },
        {
            "id": 6,
            "name": "Bhutan",
            "img": img6

        },
        {
            "id": 7,
            "name": "Brazil",
            "img": img7

        },
        {
            "id": 8,
            "name": "Brussel",
            "img": img8

        },
        {
            "id": 9,
            "name": "Canada",
            "img": img9
        },
        {
            "id": 10,
            "name": "China",
            "img": img10
        },
        {
            "id": 11,
            "name": "Croatia",
            "img": img11
        },
        {
            "id": 12,
            "name": "Cuba",
            "img": img12
        },
        {
            "id": 13,
            "name": "Cyprus",
            "img": img13
        },
        {
            "id": 14,
            "name": "Czeck Republic",
            "img": img14
        },
        {
            "id": 15,
            "name": "Dubai",
            "img": img15
        },
        {
            "id": 16,
            "name": "Egypt",
            "img": img16
        },
        {
            "id": 17,
            "name": "Finland",
            "img": img17
        },
        {
            "id": 18,
            "name": "France",
            "img": img18
        },
        {
            "id": 19,
            "name": "Germany",
            "img": img19
        },
        {
            "id": 20,
            "name": "Greece",
            "img": img20
        },

    ]
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Autoplay, FreeMode, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    countriesimg.map(countryimg => {
                        return <SwiperSlide key={countryimg.id}>
                            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                                <img src={countryimg.img} alt="" className="object-cover object-center w-full rounded-md h-48 dark:bg-gray-500" />
                                <div className="mt-6 mb-2">
                                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{countryimg.name}</span>
                                </div>
                            </div>


                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
};

export default CountrySlider;