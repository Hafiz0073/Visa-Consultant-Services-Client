import React, { useContext, useEffect, useState } from 'react';
import { AuthCOntext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';

const ReviewsCollection = () => {
    const { user } = useContext(AuthCOntext)
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(visareview => visareview._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <p>{reviews.length}</p>
            {
                reviews.map(review => <Reviews
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                >

                </Reviews>)
            }
        </div>
    );
};

export default ReviewsCollection;