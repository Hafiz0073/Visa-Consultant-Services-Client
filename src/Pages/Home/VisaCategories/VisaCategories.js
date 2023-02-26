import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';
import Visacat from '../Home/Visacat/Visacat';

const VisaCategories = () => {
    const [vservices, setVservices] = useState([]);
    useEffect(() => {
        fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/visacategoriesspecific`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setVservices(data.data)
                }
                else {
                    toast.error(data.error)
                }
            })
            .catch(err => toast.error(err.message))

    }, [])
    useTitle()

    return (
        <div>
            <p className="text-orange-500 text-center text-bold text-2xl py-4">Welcome to H Consultancy</p>
            <h2 className="text-black-300 text-center text-bold text-3xl py-4">A One-Stop Solution For All<br />
                Your Visa Needs</h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {vservices.map(vservice => <Visacat
                    key={vservice._id}
                    vservice={vservice}
                ></Visacat>)}
            </div>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center  ">

                <Button className='hover:text-gray-50'
                    outline={true}
                    gradientDuoTone="purpleToBlue"

                > <Link to="/visacategories">
                        See All
                    </Link>

                </Button>

            </div>

        </div>
    );
};

export default VisaCategories;