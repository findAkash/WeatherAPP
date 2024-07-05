import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WeatherDetails = ({ weatherData }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const storedUnit = localStorage.getItem('temperatureUnit');
    if (storedUnit) {
      setIsCelsius(storedUnit === 'celsius');
    }
  }, []);

  const toggleTemperatureUnit = () => {
    const newUnit = !isCelsius ? 'celsius' : 'fahrenheit';
    setIsCelsius(!isCelsius);
    localStorage.setItem('temperatureUnit', newUnit);
  };

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }

  const { location, current } = weatherData;

  const temperature = isCelsius ? current.temp_c : current.temp_f;
  const temperatureUnit = isCelsius ? '°C' : '°F';

  return (
    <div className="weather-details border p-4 rounded-2xl shadow-2xl w-full mx-auto h-[75%] text-center">
      <h2 className="text-xl font-semibold mb-2">
        {location.name}, {location.region}, {location.country}
      </h2>
      <p className="text-lg">
        Temperature: {temperature} {temperatureUnit}
        <button
          className="ml-2 text-blue-500 hover:text-blue-700"
          onClick={toggleTemperatureUnit}
        >
          Toggle Unit
        </button>
      </p>
      <p className="text-lg mb-2">Condition: {current.condition.text}</p>
      <img
        className="mx-auto mb-2"
        src={current.condition.icon}
        alt={current.condition.text}
      />
      <ul className="list-none p-0 mt-4">
        <li className="mb-2">Humidity: {current.humidity} %</li>
        <li className="mb-2">Pressure: {current.pressure_mb} mb</li>
        <li>Visibility: {current.vis_km} km</li>
      </ul>
    </div>
  );
};

WeatherDetails.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherDetails;
