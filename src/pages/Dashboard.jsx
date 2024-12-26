import React from 'react';
import RideCard from '../components/RideCard'; // Ensure this is the correct import path

const Dashboard = () => {
  const rideData = [
    { icon: 'directions_car', title: 'Taxi Rides', value: 1245 },
    { icon: 'block', title: 'Cancelled Rides', value: 56 },
    { icon: 'map', title: 'Active Rides', value: 43 },
    { icon: 'payments', title: 'Total Earnings', value: '$885.0' },
  ];

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
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
