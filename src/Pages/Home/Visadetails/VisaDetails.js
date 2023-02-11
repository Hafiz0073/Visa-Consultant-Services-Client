import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthCOntext } from '../../../Contexts/AuthProvider/AuthProvider';
import Reviews from '../../Reviews/Reviews';
import ReviewsCollection from '../../ReviewsCollection/ReviewsCollection';

const VisaDetails = () => {
    const { _id, title } = useLoaderData()
    const { user } = useContext(AuthCOntext)
    // const [reviews, setReviews] = useState({})
    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [user?.email])
    const handleReviewsubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = user?.email || 'unregisterd'
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
            <form onSubmit={handleReviewsubmit}>
                <h2>{title}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='username' type="text" placeholder="Type here" className="input input-bordered " />

                    <input type="text" name='email' defaultValue={user?.email} className="input input-bordered " readOnly />
                </div>
                <textarea className="textarea textarea-bordered h-24 w-full" name='message' placeholder="message"></textarea>
                <input className='btn' type="submit" value="your Review" />
            </form>
            <ReviewsCollection></ReviewsCollection>
        </div>
    );
};

export default VisaDetails;