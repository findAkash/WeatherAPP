import React from 'react';

const RecentSearches = ({ recentSearches, handleSearchClick }) => {
  return (
    <div className="bg-white recent-searches border ml-4 p-4 rounded-2xl shadow-2xl w-[100%] max-w-200px mx-auto h-[100%] max-h-[400px] overflow-y-auto relative">
      <h3 className="text-lg text-center font-semibold mb-2 sticky top-0 bg-white">
        History
      </h3>
      {recentSearches.length > 0 ? (
        <ul className="mt-1 divide-y divide-gray-200">
          {recentSearches.map((city, index) => (
            <li
              key={index}
              className="py-2 cursor-pointer hover:bg-gray-50 transition duration-300"
              onClick={() => handleSearchClick(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No recent searches.</p>
      )}
    </div>
  );
};

export default RecentSearches;
