import React from 'react';
import RideCard from '../components/RideCard'; 
import PropTypes from 'prop-types';

const Dashboard = ({rideData}) => {
  return (
    <div className="flex flex-col gap-5 bg-[#F4F5F6] w-full h-[100vh] px-6 py-3">
      {/* Dashboard Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-start">
        {rideData.map((ride, index) => (
          <RideCard key={index} icon={ride.icon} title={ride.title} value={ride.value} />
        ))}
      </div>

      {/* God's View Section */}
      <div className="w-full flex flex-col p-3 bg-white rounded-md">
        <div className="flex flex-row justify-between items-center mb-1">
          <p className="font-semibold text-xl">God's View</p>
          <div>
            <select
              id="places"
              name="places"
              className="text-[#E45200] border border-[#E45200] w-fit rounded-md p-1"
              aria-label="Filter places"
            >
              <option value="all">All</option>
              <option value="current_location">Current Location</option>
              <option value="customer_location">Customer Location</option>
              <option value="destination">Destination</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d124303.51716089815!2d80.1821463!3d13.1948442!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734193120463!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[450px] rounded-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of My Location"
            aria-label="Google Map showing my location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  rideData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default Dashboard;