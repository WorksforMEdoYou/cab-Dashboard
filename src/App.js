import React, { useState } from 'react';
import userimage from './asserts/image.png';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Menubar from './components/Menubar';
import Navbar from './components/Navbar';
import Dispatcher from './pages/Dispacher';
import dispatcherData from './asserts/DispatcherData';
import rideData from './asserts/RideData'

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("dashboard");

  return (
    <div className="bg-[#F4F5F6] w-full h-[100vh]">
      {/* NAVBAR */}
      <Navbar setMenuVisible={setMenuVisible} userImage={userimage} />

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
            <Route path="/" element={<Dashboard rideData={rideData}/>} />
            <Route path="/dispachers" element={<Dispatcher dispatcherData={dispatcherData}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;