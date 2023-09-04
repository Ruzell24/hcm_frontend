import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link  ,Navigate } from 'react-router-dom';
import service from '../shared/service/login';
import Cookies from 'js-cookie';


const Login = () => {


  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const {mutate , isSuccess} = useMutation(service.loginUser)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleActionSuccess = (data) => {
    Cookies.set('token', data.user.token);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const loginPayload = {
        email: userCredentials.email,
        password: userCredentials.password,
  
    }

    mutate(loginPayload , {
        onSuccess: (data) => {
          alert("User login successfully");
          handleActionSuccess(data);
          
        },
        onError: () => {
          alert("User login failed");
        },
      })

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
      {isSuccess && <Navigate to={'/dashboard'} replace={true}/>}
    </div>
  );
};

export default Login;
