import React from 'react';
import { SwiperSlide } from 'swiper/react';
import "../CountrySlider/CountrySlider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';


const AllCountriesSlider = ({ countryimg }) => {
    const { name, id, img } = countryimg;
    return (
        <SwiperSlide>
            {countryimg.name}


        </SwiperSlide>
    );
};

export default AllCountriesSlider;