import React, { useContext, useEffect, useState } from 'react';

const Reviews = ({ review, handleDelete, handleEdit }) => {
    const { name, _id, message, categories, email } = review
    const [visa, setVisa] = useState({})


    // useEffect(() => {
    //     fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/visacategories/${_id}`)
    //         .then(res => res.json())
    //         .then(data => setVisa(data))
    // }, [_id])


    return (
        <div>
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
                {/* <button onClick={() => handleEdit(_id)} className='btn'>update</button> */}

            </div>
            {/* <div>
                <form onSubmit={handleEdit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='username' type="text" placeholder="Type here" className="input input-bordered " defaultValue={name} required />
                    </div>

                    <textarea className="textarea textarea-bordered h-24 w-full" name='message' placeholder="message" defaultValue={message} required></textarea>
                    <input className='btn' type="submit" value="your Review" />
                </form>
            </div> */}
        </div>
    );
};

export default Reviews;