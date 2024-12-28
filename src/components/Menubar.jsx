// Menubar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem'; // Import the MenuItem component

const Menubar = ({ isVisible, setIsVisible, activeButton, setActiveButton }) => {
  // Define menu items
  const menuItems = [
    { label: 'Dashboard', path: '/', icon: 'grid_view', id: 'dashboard' },
    { label: 'Bookings', path: '/Bookings', icon: 'date_range', id: 'bookings' },
    { label: 'Riders', path: '/Riders', icon: 'group', id: 'riders' },
    { label: 'Dispatchers', path: '/dispachers', icon: 'boy', id: 'dispatchers' },
    { label: 'Drivers', path: '/drivers', icon: 'person', id: 'drivers' },
    { label: 'Requests', path: '/requests', icon: 'request_page', id: 'requests' },
    { label: 'Reports', path: '/reports', icon: 'receipt', id: 'reports' },
    { label: 'Track Bookings', path: '/trackbookings', icon: 'person', id: 'ticketbooking' },
    { label: 'Pricing Model', path: '/pricing', icon: 'credit_card', id: 'pricingmodel' },
    { label: 'Feedback', path: '/feedback', icon: 'forum', id: 'feedback' },
    { label: 'Payments', path: '/payments', icon: 'payments', id: 'payments' },
  ];

  return (
    <div
      className={`flex flex-col justify-center items-center p-3 bg-white w-1/5 ${
        isVisible ? 'block' : 'hidden'
      } md:block`}
      aria-label="Main Menu"
    >
      {/* Menu Title */}
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-gray-300">MENU</p>
        <i
          className="material-icons text-red-500 font-bold cursor-pointer md:hidden"
          onClick={() => setIsVisible(false)}
          aria-label="Close menu"
        >
          close
        </i>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col mt-2 p-1 gap-3">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            label={item.label}
            path={item.path}
            icon={item.icon}
            isActive={activeButton === item.id}
            onClick={() => {
              setActiveButton(item.id); // Update active button
              setIsVisible(false); // Close menu for small screens
            }}
            role="menuitem"
          />
        ))}
      </div>

      {/* Create Booking Button */}
      <div className="rounded-2xl bg-[#E45200] flex flex-col items-center gap-2 p-4 mt-3">
        <i className="material-icons text-white">emoji_transportation</i>
        <button className="border border-white rounded-xl bg-[#E45200] p-1">
          <p className="text-white text-sm font-semibold md:text-xl">Create Booking</p>
        </button>
      </div>
    </div>
  );
};

// PropTypes for Menubar
Menubar.propTypes = {
  isVisible: PropTypes.bool.isRequired,       // Whether the menu is visible or not
  setIsVisible: PropTypes.func.isRequired,   // Function to toggle visibility 
  activeButton: PropTypes.string.isRequired, // Currently active menu item ID
  setActiveButton: PropTypes.func.isRequired // Function to set active menu item
};

export default Menubar;