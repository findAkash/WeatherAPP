// Search.js
import React, { useState } from 'react';

const Search = ({ fetchData }) => {
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState(null);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      try {
        await fetchData(cityName);
        setCityName('');
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <input
        className="p-2 rounded-lg bg-gray-200 text-black w-full text-center mb-5"
        type="text"
        placeholder="Enter city name..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
    </div>
  );
};

export default Search;
