import { Carousel } from 'flowbite-react';
import React from 'react';

const Slide = () => {

    // const bannerData = [
    //     {
    //         image: img1,
    //         prev: 5,
    //         id: 1,
    //         next: 2
    //     },
    //     {
    //         image: img2,
    //         prev: 1,
    //         id: 2,
    //         next: 3
    //     },
    //     {
    //         image: img3,
    //         prev: 2,
    //         id: 3,
    //         next: 4
    //     },
    //     {
    //         image: img4,
    //         prev: 3,
    //         id: 4,
    //         next: 5
    //     },
    //     {
    //         image: img5,
    //         prev: 4,
    //         id: 5,
    //         next: 1
    //     }
    // ]
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
                <img
                    src="https://fastwpdemo.com/newwp/immigo/wp-content/uploads/2022/02/visa-3.jpg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                />
            </Carousel>
        </div>
    );
};

export default Slide;