import React from 'react';
import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper w-full h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 dark:bg-gray-900 p-4">
      <div className="shimmer w-4/5 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
      <div className="shimmer w-3/5 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
      <div className="shimmer w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
      <div className="shimmer w-2/5 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
      <div className="shimmer w-3/4 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
    </div>
  );
};

export default Shimmer;
