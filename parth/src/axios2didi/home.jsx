import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-4xl font-bold mb-8">
        Welcome to Awesome App!
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => navigate("/data")}
        >
          Go to Data
        </button>

        <p className="text-lg">
          Explore our amazing features and data insights.
        </p>

        <div className="flex space-x-4">
          <p
           
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Learn More
          </p>
          <span className="text-gray-400">|</span>
          <p
          
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;