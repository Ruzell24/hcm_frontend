import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    last_name: '',
    first_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signUpPayload = {
        first_name: userCredentials.first_name,
        last_name: userCredentials.last_name,
        email: userCredentials.email,
        password: userCredentials.password,
        username: userCredentials.username
    }


    // You can perform form submission logic here
    console.log(signUpPayload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign U</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              required
              type="text"
              id="username"
              name="username"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Username"
              value={userCredentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
               required
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Email"
              value={userCredentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-600">
              Last Name
            </label>
            <input
               required
              type="text"
              id="last_name"
              name="last_name"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Last Name"
              value={userCredentials.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="first_name" className="block text-gray-600">
              First Name
            </label>
            <input
               required
              type="text"
              id="first_name"
              name="first_name"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="First Name"
              value={userCredentials.first_name}
              onChange={handleChange}
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
               required
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              value={userCredentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
