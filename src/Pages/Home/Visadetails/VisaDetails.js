import { Unsubscribe } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthCOntext } from '../../../Contexts/AuthProvider/AuthProvider';
import Reviews from '../../Reviews/Reviews';

const VisaDetails = () => {
    const { _id, title, name, Details, img, price } = useLoaderData()
    const { user } = useContext(AuthCOntext)
    const [reviews, setReviews] = useState([false])
    useEffect(() => {
        fetch(`http://localhost:5000/catreviews?categories=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])
    const handleReviewsubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = user?.email
        const message = form.message.value;



        const review = {
            categories: _id,
            categoriesName: title,
            name,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review added successfully')
                    form.reset()
                }

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div>{
                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto space-y-12">

                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src={img} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

                                <h3 className="text-3xl font-bold">{title}</h3>
                                <p className="my-6 dark:text-gray-400">{Details}</p>
                                <button type="button" className="self-start">{price}</button>
                            </div>
                        </div>
                    </div>
                </section>
            }
            </div>
            <div>
                <form onSubmit={handleReviewsubmit}>
                    <h2>{title}</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='username' type="text" placeholder="Type here" className="input input-bordered " />

                        <input type="text" name='email' defaultValue={user?.email} className="input input-bordered " readOnly />
                    </div>
                    <textarea className="textarea textarea-bordered h-24 w-full" name='message' placeholder="message"></textarea>
                    <input className='btn' type="submit" value="your Review" />
                </form>
            </div>
            <div>
                {
                    reviews.map(review => <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    {review?.img &&
                                        <img src={review.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    }

                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>

                                </div>
                            </div>

                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                            <p>{review.message}</p>
                        </div>

                    </div>


                    )
                }
            </div>
        </div>
    );
};

export default VisaDetails;