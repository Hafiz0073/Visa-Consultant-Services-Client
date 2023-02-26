import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const VisacatAll = ({ vserviceall }) => {
    const { title, img, _id, Details, price } = vserviceall
    return (
        <div className="max-w-sm">
            <Card>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className="object-cover object-center w-full h-72 dark:bg-gray-500" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link to="/">
                        {title}
                    </Link>
                </h5>
                <>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {
                            Details.length > 100 ?
                                <p>{Details.slice(0, 100) + '...'}</p>
                                :
                                <p>{Details}</p>}
                    </p>
                </>
                <Rating size="md">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                </Rating>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price}
                    </span>
                    <Link to={`/visacategories/${_id}`}

                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Details
                    </Link>
                </div>
            </Card>
        </div >
    );
};

export default VisacatAll;