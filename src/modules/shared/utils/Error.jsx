import React from 'react';
import { Link } from 'react-router-dom'; 

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">Error</h1>
      <p className="mt-2 text-gray-600">Something went wrong. Please try again later.</p>


      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
