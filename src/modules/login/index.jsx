import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
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

    const loginPayload = {


        email: userCredentials.email,
        password: userCredentials.password,
  
    }


    // You can perform form submission logic here
    console.log(loginPayload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
        
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
            Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Don't have an account? Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
