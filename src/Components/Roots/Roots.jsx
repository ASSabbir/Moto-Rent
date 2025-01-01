import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";


const Roots = () => {
    return (
        <div className="font-funnel bg-zinc-900 text-white">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;