import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export default function Navbar({ showModalHandler }) {
    const userLoginData = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <nav className="w-full bg-[#201d75] text-white p-4">
                <div className="max-w-7xl text-md m-auto flex justify-between items-center">
                    <div className="text-xl font-bold">
                        <Link to="/">BlogPost</Link>
                    </div>
                    <div className="">

                        <ul className="flex space-x-3 md:flex sm:space-x-6 items-center ">
                            <li className="text-sm sm:text-base hover:font-semibold">
                                <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/">Home</NavLink>
                            </li>
                            {userLoginData.role === "admin" && (
                                <li className="hover:font-semibold text-sm sm:text-base">
                                    <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/new-post">New post</NavLink>
                                </li>
                            )}
                            <li className="hover:font-semibold text-sm sm:text-base">
                                <button onClick={showModalHandler}>Logout</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
