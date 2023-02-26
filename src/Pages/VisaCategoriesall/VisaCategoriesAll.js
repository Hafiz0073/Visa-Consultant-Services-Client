import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import VisacatAll from '../VisaCatAll/VisaCatAll';

const VisaCategoriesAll = () => {
    const [vservicesall, setVservicesall] = useState([]);
    useEffect(() => {
        fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/visacategories`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setVservicesall(data.data)
                }
                else {
                    toast.error(data.error)
                }
            })
            .catch(err => toast.error(err.message))


    }, [])

    return (
        <div>
            {/* {
                <p>{vservicesall.length}</p>
            } */}

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {vservicesall.map(vserviceall => <VisacatAll
                    key={vserviceall._id}
                    vserviceall={vserviceall}
                ></VisacatAll>)}
            </div>

        </div>
    );
};

export default VisaCategoriesAll;