import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthCOntext } from '../../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthCOntext)
    const location = useLocation
    if (loading) {
        <h2 className='text-5xl'>Loading....</h2>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;