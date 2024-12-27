import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Component for a single menu item
const MenuItem = ({ label, path, icon, isActive, onClick }) => (
  <Link to={path}>
    <button
      className={`flex flex-row gap-1 items-center p-1 relative group w-full rounded-md ${
        isActive ? 'bg-[#F9F9F9]' : 'bg-white'
      }`}
      onClick={onClick}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* Icon */}
      <i className={`material-icons ${isActive ? 'text-[#E45200]' : 'text-[#797979]'}`}>
        {icon}
      </i>
      {/* Label */}
      <p className={`text-xs md:text-sm ${isActive ? 'text-black' : 'text-[#797979]'}`}>
        {label}
      </p>
      {/* Highlight Bar if Active */}
      {isActive && (
        <div className="w-3 h-[20px] bg-[#E45200] rounded-l-full absolute bottom-[6px] right-0"></div>
      )}
    </button>
  </Link>
);

// PropTypes for MenuItem
MenuItem.propTypes = {
  label: PropTypes.string.isRequired, // Label of the menu item
  path: PropTypes.string.isRequired,  // Navigation path
  icon: PropTypes.string.isRequired,  // Icon name
  isActive: PropTypes.bool.isRequired, // Whether the item is active
  onClick: PropTypes.func.isRequired, // Click handler
};

export default MenuItem;