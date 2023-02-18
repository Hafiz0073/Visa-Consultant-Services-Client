import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import VisacatAll from '../VisaCatAll/VisaCatAll';

const VisaCategoriesAll = () => {
    const [vservicesall, setVservicesall] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/visacategories`)
            .then(res => res.json())
            .then(data => setVservicesall(data))
    }, [])

    return (
        <div>


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