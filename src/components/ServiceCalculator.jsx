import { useState } from 'react';

const ServiceCalculator = () => {
  const [rooms, setRooms] = useState(1);
  const COST_PER_ROOM = 5000;

  const totalCost = rooms * COST_PER_ROOM;

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="heading-tertiary mb-6">Service Cost Calculator</h3>
      <p className="text-dark-gray mb-6">
        Get an estimated cost for complete home wiring based on number of rooms.
      </p>

      <div className="mb-6">
        <label className="block text-dark-gray font-medium mb-2">
          Number of Rooms
        </label>
        <input
          type="number"
          min="1"
          max="20"
          value={rooms}
          onChange={(e) => setRooms(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
        />
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-dark-gray">Cost per room:</span>
          <span className="font-semibold">Rs. {COST_PER_ROOM.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-dark-gray">Number of rooms:</span>
          <span className="font-semibold">{rooms}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Estimated Total:</span>
            <span className="text-2xl font-bold text-primary">
              Rs. {totalCost.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        * This is an estimated cost. Final cost may vary based on specific requirements.
      </p>

      <button className="btn-primary w-full">
        Book This Service
      </button>
    </div>
  );
};

export default ServiceCalculator;
