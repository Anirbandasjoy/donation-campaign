import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-2xl mt-4">Page not found</p>
                <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>

                <Link to="/" className="mt-4 btn btn-primary  text-yellow-50 hover:underline">Go back</Link>

            </div>
        </div>
    );
};

export default NotFoundPage;