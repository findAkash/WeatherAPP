import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather';
import WeatherDetails from './components/WeatherDetails';
import Search from './components/Search';
import WeatherDetailsSkeleton from './components/WeatherDetailSkeleton';
import RecentSearches from './components/RecentSearch';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const fetchData = async (cityName) => {
    try {
      setLoading(true);
      const data = await fetchWeather(cityName);
      setWeatherData(data);
      setError(null);

      setRecentSearches((prevSearches) => {
        const existingIndex = prevSearches.findIndex(
          (search) => search === cityName
        );
        if (existingIndex !== -1) {
          return [
            cityName,
            ...prevSearches.slice(0, existingIndex),
            ...prevSearches.slice(existingIndex + 1),
          ];
        } else {
          return [...prevSearches, cityName];
        }
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchClick = (cityName) => {
    fetchData(cityName);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="border p-4 rounded shadow-2xl w-[50%] max-w[200px] bg-white h-[50%] max-[200px]:">
        <div className="text-center text-2xl font-bold mb-5">Weather App</div>
        <Search fetchData={fetchData} />
        {loading ? (
          <WeatherDetailsSkeleton />
        ) : weatherData ? (
          <WeatherDetails weatherData={weatherData} />
        ) : (
          <div className="text-center mt-4 text-red-500">
            {error || 'No weather data available.'}
          </div>
        )}
      </div>
      <div>
        <RecentSearches
          recentSearches={recentSearches}
          handleSearchClick={handleSearchClick}
        />
      </div>
    </div>
  );
};

export default App;
