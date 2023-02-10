import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VisaDetails = () => {
    const { title } = useLoaderData()
    return (
        <div>
            <p>name:{title}</p>
        </div>
    );
};

export default VisaDetails;