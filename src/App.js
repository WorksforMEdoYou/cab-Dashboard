import React, { useState } from 'react';
import userimage from './asserts/image.png';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Dispachers from './pages/Dispachers';
import NotFound from './pages/NotFound';
import Menubar from './components/Menubar';

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("dashboard");

  return (
    <div className="bg-[#F4F5F6] w-full h-[100vh]">
      {/* NAVBAR */}
      <div className="flex flex-wrap items-center px-6 py-4 gap-6 md:gap-10 bg-white shadow-md sticky top-0 z-10">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              fill="#F06225"
              d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
            ></path>
            <path
              fill="#F06225"
              d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            ></path>
          </svg>
          <p className="text-lg font-bold ml-2">Logoipsum</p>
        </div>

        {/* Welcome and Search */}
        <div className="flex flex-auto flex-wrap md:flex-nowrap justify-center items-center lg:gap-[50px]">
          <div className="hidden md:flex">
            <p className="font-semibold text-sm md:text-md">
              Welcome Back, <span className="font-bold">Ramiro!</span>
            </p>
          </div>
          <div className="relative w-full md:w-3/5">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#F9F9F9] border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <i className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E45200]">
              search
            </i>
          </div>
        </div>

        {/* Profile and Notification */}
        <div className="flex items-center gap-4">
          {/* Profile */}
          <div className="flex items-center gap-2">
            <img
              src={userimage}
              alt="User"
              className="rounded-full h-8 w-8 md:h-10 md:w-10"
            />
            <p className="text-sm font-semibold hidden md:block">Ramiro Kutch</p>
            <i className="material-icons text-[#E45200]">arrow_drop_down</i>
          </div>

          {/* Notification */}
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C6.67 6.165 6 7.388 6 9v5.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="md:hidden" onClick={() => setMenuVisible(!menuVisible)}>
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-row gap-3 mt-1 w-full">
        {/* Menubar */}
        <Menubar
          isVisible={menuVisible}
          setIsVisible={setMenuVisible}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />

        {/* Page Content */}
        <div className="w-full bg-[#F4F5F6]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dispachers" element={<Dispachers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
