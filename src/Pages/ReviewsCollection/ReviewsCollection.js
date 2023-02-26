import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthCOntext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';

const ReviewsCollection = () => {
    const { user } = useContext(AuthCOntext)


    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email,])

    // const handleEdit = (event, id) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.username.value;
    //     const message = form.message.value;

    //     const review = {
    //         name,
    //         message
    //     }

    //     fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/reviews/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(review)
    //     }).then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 toast.success(data.message);
    //             } else {
    //                 toast.err(data.error)
    //             }
    //         })
    //         .catch(err => toast.error(err.message))
    // }

    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/reviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(data.message);
                        setRefresh(!refresh);
                    } else {
                        toast.error(data.error);
                    }
                }).catch(err => toast.error(err.message))
        }
    }
    useTitle('Reviews')

    return (
        <div>
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