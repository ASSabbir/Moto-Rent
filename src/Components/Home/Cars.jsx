import React from 'react';
import { Link } from 'react-router-dom';

const Cars = ({ cars }) => {
  console.log(cars)
  return (
    <div className="px-4 py-8 mt-20 mb-20">
      <h2 className="text-5xl font-bold mb-20  text-center">Recent Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl mx-auto">
        {cars.slice(0, 6).map((car) => (
          <div
            key={car.vehicleRegistrationNumber}
            className="border  rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 overflow-hidden"
          >
            <img
              src={car.imageUrl}
              alt={car.carModel}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.carModel}</h3>
              
              <div className="mt-3 mb-6 flex justify-between items-center">
                <p className="font-medium">Price: ${car.dailyRentalPrice}/day</p>
                <p
                  className={`font-medium ${car.availability ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {car.availability ? "Available" : "Unavailable"}
                </p>
                
              </div>
              <div className="divider"></div>
              <Link to={`/car/${car._id}`}
                className=" w-full bg-primary rounded-lg text-white py-2 px-5   transition"
                disabled={!car.availability}
              >
                {car.availability ? "Book Now" : "Unavailable"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;