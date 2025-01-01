import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const MyCars = () => {
    const [datas, setDatas] = useState([]);
    const [dataloading, setDataloading] = useState(true);
    const { user, loading } = useContext(AuthContext);
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        if (!user?.email) return; // Ensure user email exists before fetching
        fetch("http://localhost:5000/allcars")
            .then((res) => res.json())
            .then((data) => {
                setDatas(data);
                // Filter user-specific data
                const filteredData = data.filter((car) => car.userDetails.email === user.email);
                setMyData(filteredData);
                setDataloading(false);
            });
    }, [user]);

    if (loading || dataloading) {
        return <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }

    const handleDelete = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/car/${data._id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then(() => {
                        const updatedData = myData.filter((item) => item._id !== data._id);
                        setMyData(updatedData);
                        Swal.fire("Deleted!", "Your car has been deleted.", "success");
                    });
            }
        });
    };

    if (myData.length === 0) {
        return (
            <div className="h-[calc(100vh-64px)] font-title text-4xl flex-col flex justify-center items-center">
                <h1>You Didn't Add Any Cars</h1>
                <h1 className="text-lg text-zinc-500 mt-9">- Please go to Add Cars page and add your Car -</h1>
            </div>
        );
    }

    return (
        <div className="">
            <div className="min-h-screen px-[10vw] text-white p-8">
                {myData.map((data) => (
                    <div
                        key={data._id}
                        className="mx-auto border-t p-5 gap-9 pb-9 border-white flex flex-col xl:flex-row items-start space-y-10"
                    >
                        <div className="w-full lg:min-w-[700px] flex-1">
                            <img src={data.imageUrl} alt={data.carModel} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full flex-1 space-y-4">
                            <h1 className="text-3xl font-bold">{data.carModel}</h1>
                            <p className="text-gray-400 text-sm">
                                Added by:  {data.userDetails.email}
                            </p>
                            <p>{data.description}</p>
                            <p>
                                <strong>Daily Rental Price:</strong> ${data.dailyRentalPrice}
                            </p>
                            <p>
                                <strong>Location:</strong> {data.location}
                            </p>
                            
                            {data.availability && (
                                <div className="mt-2 px-3 py-1 bg-green-500 text-black rounded">✅ Available</div>
                            )}
                            <div className="gap-5 flex">
                                <button
                                    onClick={() => handleDelete(data)}
                                    className="mt-4 border-2 border-primary hover:bg-transparent w-40 px-5 py-3 bg-primary duration-200"
                                >
                                    Delete
                                </button>
                                <Link to={`/update/${data._id}`}>
                                    <button className="mt-4 border-2 border-primary px-5 py-3 w-40 hover:bg-primary duration-200">
                                        Update
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCars;
