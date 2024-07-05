// WeatherDisplay.js
import React from 'react';

const WeatherDetailsSkeleton = () => {
  return (
    <div className="weather-details border p-4 rounded-2xl shadow-2xl w-full mx-auto h-[75%] text-center">
      <div className="animate-pulse">
        <div className="mb-2 h-7 bg-gray-300 rounded"></div>
        <div className="mb-4 h-6 bg-gray-300 rounded"></div>
        <div className="mb-4 h-6 bg-gray-300 rounded"></div>

        <div className="image text-center w-[40px] h-[40px] mb-4 bg-gray-300 rounded mx-auto"></div>

        <div className="mb-4 h-4 bg-gray-300 rounded"></div>
        <div className="mb-4 h-4 bg-gray-300 rounded"></div>
        <div className="mb-4 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default WeatherDetailsSkeleton;
