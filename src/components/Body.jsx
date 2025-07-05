import React, { useEffect } from 'react';

const Body = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 4000); // refresh every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-xl font-semibold text-gray-700 bg-white px-6 py-4 rounded shadow">
        Loading Preview...
      </div>
    </div>
  );
};

export default Body;