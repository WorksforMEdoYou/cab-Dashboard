// DispatcherCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DispatcherCard = ({ id, type, status, pickup, dropoff }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="p-3 rounded-md bg-white flex flex-col gap-2 mt-2 shadow-md relative cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}
    >
      {/* Vertical Line */}
      {isVisible && (
        <div className="absolute top-[10px] bottom-0 left-0 w-[3px] bg-orange-500 rounded-xl"></div>
      )}

      <div className="flex flex-row justify-between items-center pl-3">
        <div className="flex flex-col gap-1">
          <p className="text-start font-bold text-lg">{id}</p>
          <p className="text-start text-sm text-gray-400">{type}</p>
        </div>
        <div className="bg-orange-100 px-2 py-1 rounded-md">
          <p className="text-orange-500 text-xs">• {status}</p>
        </div>
      </div>

      {isVisible && (
        <div className="flex flex-row gap-2 items-start pl-3">
          <div className="flex flex-col items-center">
            <i className="material-icons text-black text-lg">radio_button_checked</i>
            <div className="h-6 border-l border-dotted border-gray-300"></div>
            <i className="material-icons text-orange-500 text-lg">location_on</i>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm">{pickup}</p>
            <hr className="border-gray-200" />
            <p className="text-sm">{dropoff}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes validation
DispatcherCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  pickup: PropTypes.string.isRequired,
  dropoff: PropTypes.string.isRequired,
};

export default DispatcherCard;
