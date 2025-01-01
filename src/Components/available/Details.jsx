import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const {user} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [car, setCar] = useState(null);
    const [error, setError] = useState(null);

    const { pathname } = useLocation();
    const id = pathname.replace('/car/', '');  // Extract the ID from the URL

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/car/${id}`); // Fetch car data from server
                if (!response.ok) {
                    throw new Error("Car not found");
                }
                const data = await response.json();
                setCar(data); // Set the fetched car data
            } catch (error) {
                setError(error.message); // Set error if any
            } finally {
                setLoading(false); // Set loading to false after fetching is done
            }
        };

        fetchCarData();
    }, [id]);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    if (loading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>; // Error handling if the car is not found
    }

    if (!car) {
        return <div className="text-center">Car not found!</div>; // Fallback for missing car data
    }

    const {
        carModel,
        dailyRentalPrice,
        availability,
        vehicleRegistrationNumber,
        features,
        imageUrl,
        description,
        bookingCount,
    } = car;
    const handleAddToWatchlist = (data) => {
        console.log(data)
        if (!user) {

            Toast.fire({
                icon: "error",
                title: "Please log in to add reviews to your watchlist."
            });
            return;
        }
        
        const updateddata={...data,'addedUser':user.email}
        delete updateddata._id
        console.log(updateddata)
        

        fetch("http://localhost:5000/watchlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateddata),
        })
            .then((res) => res.json())
            .then((data) => {
                Toast.fire({
                    icon: "success",
                    title: "Added to your watchlist."
                });
                console.log(data)})
            .catch(error=>console.log(error))
    };
    const handleBookNow = () => {
        setShowModal(true); // Show the booking confirmation modal
    };

    return (
        <div className="car-details  max-w-4xl mx-auto p-6 rounded">
            {/* Car Image */}
            <img
                src={imageUrl}
                alt={carModel}
                className="w-full h-96 object-cover rounded mb-4"
            />

            {/* Car Info */}
            <h1 className="text-2xl font-bold mb-2">{carModel}</h1>
            <p className="text-gray-600 text-lg mb-2">
                Price Per Day: <span className="font-bold">${dailyRentalPrice}</span>
            </p>
            <p className={`text-lg font-bold mb-2 ${availability ? "text-green-500" : "text-red-500"}`}>
                {availability ? "Available" : "Unavailable"}
            </p>
            <p className="text-gray-600">Registration Number: {vehicleRegistrationNumber}</p>

            <h2 className="text-xl font-bold mt-4 mb-2">Features:</h2>
            <ul className="list-disc list-inside mb-4">
                {features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-4 mb-2">Description:</h2>
            <p className="text-gray-700 mb-4">{description}</p>

            {/* Book Now Button */}
            <button
                onClick={handleBookNow}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Book Now
            </button>

            {/* Booking Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-black rounded-lg shadow-lg p-6 max-w-md">
                        <h2 className="text-xl font-bold mb-4">Confirm Your Booking</h2>
                        <p><strong>Model:</strong> {carModel}</p>
                        <p><strong>Price Per Day:</strong> ${dailyRentalPrice}</p>
                        <p><strong>Features:</strong> {features.join(", ")}</p>
                        <p><strong>Description:</strong> {description}</p>
                        <div className="mt-4 flex justify-end gap-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-500 text-black rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
                                onClick={() => {
                                    // Add booking logic here
                                    setShowModal(false);

                                    handleAddToWatchlist(car)
                                }}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
