import { Link } from "react-router-dom";
import Button from "../Shared/Button";


const SpicialSection = () => {
    return (
        <section className="relative w-full h-[70vh] mt-20">
            
            <img src="/img1.jpg" className="absolute top-0 left-0 w-full h-full object-cover" alt="" />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
                
            </div>
        </section>
    );
};

export default SpicialSection;