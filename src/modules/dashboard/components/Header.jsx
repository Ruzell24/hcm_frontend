import Cookies from 'js-cookie';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ user,  onStartPlay }) => {
  const navigate = useNavigate();
  
  const onLogout = () => {
    Cookies.remove('token')
    navigate('/')
  }

  return (
    <header className="shadow-md p-4">
      <div className="flex justify-end items-center">
       
        <div className="flex items-center space-x-4">
          <div
            className="cursor-pointer text-gray-500 hover:text-gray-800"
            onClick={onStartPlay}
          >
            <FaPlay className="text-2xl" />
          </div>
          <div
            className="cursor-pointer text-red-500 hover:text-red-800 font-bold"
            onClick={onLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
