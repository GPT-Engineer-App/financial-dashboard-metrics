import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Home
        </Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;