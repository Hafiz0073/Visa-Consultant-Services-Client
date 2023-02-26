import React from 'react';
import useTitle from '../../../hooks/useTitle';
import CountrySlider from '../CountrySlider/CountrySlider';
import Slide from '../Slide/Slide';
import VisaCategories from '../VisaCategories/VisaCategories';
import Download from './Download/Download';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slide></Slide>
            <VisaCategories></VisaCategories>
            <CountrySlider></CountrySlider>
            <Download></Download>
        </div>
    );
};

export default Home;