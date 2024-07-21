import React from 'react';
import { FaListUl, FaCheck, FaTrashAlt } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className="bg-blue-400 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features of Task Miner</h2>
        <div className="flex justify-around gap-8 px-8">

          {/* Feature 1: List Tasks */}
          <div className="feature-card flex flex-col items-center bg-blue-600 p-6 rounded-lg hover:bg-blue-700 transition duration-300">
            <FaListUl className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">List Your Tasks</h3>
            <p className="text-gray-300">Organize your tasks in one place. Keep track of what needs to be done.</p>
          </div>

          {/* Feature 2: Mark as Completed */}
          <div className="feature-card flex flex-col items-center bg-blue-600 p-6 rounded-lg hover:bg-blue-700 transition duration-300">
            <FaCheck className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mark as Completed</h3>
            <p className="text-gray-300">Check off completed tasks to keep your list clean and focused.</p>
          </div>

          {/* Feature 3: Delete Tasks */}
          <div className="feature-card flex flex-col items-center bg-blue-600 p-6 rounded-lg hover:bg-blue-700 transition duration-300">
            <FaTrashAlt className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Delete Tasks</h3>
            <p className="text-gray-300">Remove tasks you no longer need. Keep your task miner clutter-free.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;