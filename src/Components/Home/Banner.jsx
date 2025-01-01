import { Link } from "react-router-dom";
import Button from "../Shared/Button";


const Banner = () => {
    return (
        <section className="relative w-full h-96">
            
            <img src="/banner.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
                <h1 className="text-4xl sm:text-5xl pb-9 lg:text-6xl font-bold mb-4">
                    Drive Your Dreams Today!
                </h1>
                <Link>
                    <Button text={'View Available Cars'}></Button>
                </Link>
            </div>
        </section>
    );
};

export default Banner;
