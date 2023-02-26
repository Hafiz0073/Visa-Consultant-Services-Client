import { Carousel } from 'flowbite-react';
import React from 'react';

import img1 from '../../../Assets/mainslide/banner-1.jpg';
import img2 from '../../../Assets/mainslide/banner-2.jpg';
import img3 from '../../../Assets/mainslide/banner-3-1024x458.jpg';
import img4 from '../../../Assets/mainslide/banner-4-1024x452.jpg';
import img5 from '../../../Assets/mainslide/banner-5-1024x452.jpg';

const Slide = () => {

    const mainSlide = [
        {
            image: img1,
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 1
        }
    ]
    return (
        <div className="h-56 sm:h-64 xl:h-96 2xl:h-full">
            <Carousel slideInterval={5000}>
                {
                    mainSlide.map(mslide => <div
                        key={mslide.id}>


                        <img src={mslide.image} alt="" />
                    </div>)
                }

            </Carousel>
        </div>
    );
};

export default Slide;