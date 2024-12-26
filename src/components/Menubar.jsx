import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = ({ isVisible, setIsVisible, activeButton, setActiveButton }) => {
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
    >
      {/* Menu Title */}
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-gray-300">MENU</p>
        <i
          className="material-icons text-red-500 font-bold cursor-pointer md:hidden"
          onClick={() => setIsVisible(false)}
        >
          close
        </i>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col mt-2 p-1 gap-3">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <button
              className={`flex flex-row gap-1 items-center p-1 relative group w-full rounded-md ${
                activeButton === item.id ? 'bg-[#F9F9F9]' : 'bg-white'
              }`}
              onClick={() => {
                setActiveButton(item.id);
                setIsVisible(false); // Close menu after selection (for smaller screens)
              }}
            >
              <i
                className="material-icons"
                style={{ color: activeButton === item.id ? '#E45200' : '#797979' }}
              >
                {item.icon}
              </i>
              <p
                className={`text-xs md:text-sm ${
                  activeButton === item.id ? 'text-black' : 'text-[#797979]'
                }`}
              >
                {item.label}
              </p>
              {activeButton === item.id && (
                <div className="w-3 h-[20px] bg-[#E45200] rounded-l-full absolute bottom-[6px] right-0"></div>
              )}
            </button>
          </Link>
        ))}
      </div>

      {/* Create Booking */}
      <div className="rounded-2xl bg-[#E45200] flex flex-col items-center gap-2 p-4 mt-3">
        <i className="material-icons text-white">emoji_transportation</i>
        <button className="border border-white rounded-xl bg-[#E45200] p-1">
          <p className="text-white text-sm font-semibold md:test-xl">Create Booking</p>
        </button>
      </div>
    </div>
  );
};

export default Menubar;
