import React from 'react';
import PropTypes from 'prop-types';

const RideCard = ({ icon, title, value }) => {
  return (
    <div
      className="flex flex-col items-center bg-white p-2 rounded-xl shadow-md"
      role="article"
      aria-labelledby={`ride-card-title-${title}`}
    >
      <i className="material-icons text-[#E45200] text-2xl mb-2">{icon}</i>
      <p id={`ride-card-title-${title}`} className="text-[#797979] font-bold text-lg text-center">
        {title}
      </p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

RideCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RideCard;