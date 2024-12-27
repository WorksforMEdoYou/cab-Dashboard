// Dispatchers.jsx
import React from 'react';
import DispatcherCard from '../components/DispatcherCard';
import PropTypes from 'prop-types';

const Dispatcher = ({dispatcherData}) => {
  return (
    <div className="min-h-[100vh] w-full bg-gray-100 px-4 py-3 flex flex-col lg:flex-row gap-4">
      {/* Dispatchers List */}
      <div className="flex flex-col w-full lg:w-1/4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-start font-semibold text-xl">Dispatchers</p>
        </div>
        <div className="bg-gray-100 flex flex-row gap-3 mb-4">
          {/* Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search Dispatchers"
              className="w-full bg-white border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <i className="material-icons absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500">
              search
            </i>
          </div>
          {/* Filter */}
          <select
            id="status-filter"
            name="status-filter"
            aria-label="Filter Dispatchers by Status"
            className="bg-white rounded-lg p-2 text-black border border-gray-300"
          >
            <option value="all">Status</option>
            <option value="finished">Finished</option>
            <option value="assigned">Assigned</option>
            <option value="not_assigned">Not Assigned</option>
          </select>
        </div>
        {/* Dispatcher Cards */}
        {dispatcherData.map((dispatcher) => (
          <DispatcherCard
            key={dispatcher.id}
            id={dispatcher.id}
            type={dispatcher.type}
            status={dispatcher.status}
            pickup={dispatcher.pickup}
            dropoff={dispatcher.dropoff}
          />
        ))}
      </div>

      {/* Google Map */}
      <div className="flex-grow w-full lg:w-3/4 mt-4 lg:mt-10 h-[400px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124310.05233364138!2d80.19866420000001!3d13.1819899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734251120523!5m2!1sen!2sin"
          className="w-full h-full rounded-md shadow-md"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map showing dispatchers' locations"
        ></iframe>
      </div>
    </div>
  );
};

Dispatcher.propTypes = {
  dispatcherData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      pickup: PropTypes.string.isRequired,
      dropoff: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dispatcher;