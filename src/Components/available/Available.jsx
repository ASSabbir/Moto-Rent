import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";

const Available = () => {
    const { datas, dataloading } = useContext(AuthContext);
    const cars = datas;

    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // Toggle between 'grid' and 'list'
    const [sortOption, setSortOption] = useState("dateNewest"); // Default sorting option

    if (dataloading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    // Handle search functionality
    const filteredCars = cars.filter((car) => {
        const model = car.model || ""; // Default to an empty string if undefined
        const brand = car.brand || ""; // Default to an empty string if undefined
        const location = car.location || ""; // Default to an empty string if undefined

        return (
            model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    // Handle sorting
    const sortedCars = [...filteredCars].sort((a, b) => {
        if (sortOption === "dateNewest") return new Date(b.dateAdded) - new Date(a.dateAdded);
        if (sortOption === "dateOldest") return new Date(a.dateAdded) - new Date(b.dateAdded);
        if (sortOption === "priceLowest") return a.dailyPrice - b.dailyPrice;
        if (sortOption === "priceHighest") return b.dailyPrice - a.dailyPrice;
        return 0;
    });

    return (
        <div className="available-cars max-w-screen-2xl mx-auto mt-20">
            {/* Search and Sorting Controls */}
            <div className="controls flex md:flex-row flex-col justify-between items-center mb-20">
                <input
                    type="text"
                    placeholder="Search by model, brand, or location"
                    className="p-2 border rounded"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex items-center gap-4">
                    <select
                        className="p-2 border rounded"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="dateNewest">Date Added: Newest First</option>
                        <option value="dateOldest">Date Added: Oldest First</option>
                        <option value="priceLowest">Price: Lowest First</option>
                        <option value="priceHighest">Price: Highest First</option>
                    </select>
                    <button
                        onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                        className="p-2 border rounded"
                    >
                        Toggle View: {viewMode === "grid" ? "List" : "Grid"}
                    </button>
                </div>
            </div>

            {/* Display Cars */}
            <div
                className={
                    viewMode === "grid"
                        ? "grid md:grid-cols-3 gap-4"
                        : "list-view flex flex-col gap-4"
                }
            >
                {sortedCars.map((car) => (
                    <div
                        key={car._id}
                        className="car-card border rounded p-4 shadow hover:shadow-lg transition"
                    >
                        <img
                            src={car.imageUrl}
                            alt={car.carModel}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h3 className="text-xl font-bold mt-2">{car.carModel}</h3>
                        <p className="text-gray-300">{car.vehicleRegistrationNumber}</p>
                        <p className="text-gray-600">Location: {car.location}</p>
                        <p className="text-gray-600">Price: ${car.dailyRentalPrice}/day</p>
                        <p className="text-gray-600">Booking Count: {car.bookingCount}</p>
                        <p className="text-gray-500 text-sm">Added: {car.dateAdded}</p>
                        <button className="mt-2 bg-primary text-white px-4 py-2 rounded ">
                            
                            <Link to={`/car/${car._id}`}>
                            Book Now
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Available;
