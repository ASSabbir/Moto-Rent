import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import Headroom from "react-headroom";


const Nav = () => {
    // const {datas}=useContext(AuthContext)
    // console.log(datas)
    const { user, logout } = useContext(AuthContext)
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const handelLogOut = () => {
        logout()
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: `Bye See You Again`
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navlink = <>
        <Link to={'/'}><li className="p-2">Home</li></Link>
        <Link to={'/availablecars'}><li className="p-2">Available Cars</li></Link>
        <Link to={'/addcar'}><li className="p-2">Add Car</li></Link>
        <Link to={'/mycars'}><li className="p-2">My Cars</li></Link>
        <Link to={'/mybooking'}><li className="p-2">My Bookings</li></Link>

    </>
    const navlink2 = <>
        <Link to={'/'}><li className="p-2">Home</li></Link>
        <Link to={'/availablecars'}><li className="p-2">Available Cars</li></Link>


    </>
    return (
        <Headroom>
            <div className="bg-zinc-900  text-white w-full border-b-2">
                <div className="navbar  max-w-screen-2xl mx-auto  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navlink}
                            </ul>
                        </div>
                        <div className="flex">
                            <img src="/icons8-hatchback-50.png" alt="" />
                            <h1 className="btn btn-ghost text-2xl">Moto Rent</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-lg px-1">
                            {user ? navlink : navlink2}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex items-center gap-2">
                                    <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                        <div className="w-12 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <button onClick={handelLogOut} className="text-primary underline underline-offset-4 cursor-pointer">Log Out</button>
                                </div>

                                :
                                <Link to={'/login'}><h1 className="text-primary underline underline-offset-4 cursor-pointer">Login</h1></Link>
                        }
                    </div>
                </div>
            </div>
        </Headroom>

    );
};

export default Nav;