import React, { useEffect, useState } from 'react';

const Reviews = ({ review, handleDelete }) => {
    const { name, _id, message, categories, email } = review
    const [visa, setVisa] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/visacategories/${_id}`)
            .then(res => res.json())
            .then(data => setVisa(data))
    }, [_id])

    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        {categories?.img &&
                            <img src={categories.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        }

                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>

                    </div>
                </div>

            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>{message}</p>
            </div>
            <button onClick={() => handleDelete(_id)} className='btn'>x</button>

        </div>
    );
};

export default Reviews;