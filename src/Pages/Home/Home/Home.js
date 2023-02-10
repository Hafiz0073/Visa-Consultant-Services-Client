import React from 'react';
import CountrySlider from '../CountrySlider/CountrySlider';
import Slide from '../Slide/Slide';
import VisaCategories from '../VisaCategories/VisaCategories';

const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <VisaCategories></VisaCategories>
            <CountrySlider></CountrySlider>
        </div>
    );
};

export default Home;