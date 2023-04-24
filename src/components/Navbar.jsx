import React from "react";
import { Link } from "react-router-dom";
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
                    <div className="flex">
                        <div className="md:hidden">

                            <MdMenu fontSize="30px" />
                        </div>
                        <ul className="hidden md:flex space-x-6 items-center">
                            <li className="hover:font-semibold">
                                <Link to="/">Home</Link>
                            </li>
                            {userLoginData.role === "admin" && (
                                <li className="hover:font-semibold">
                                    <Link to="/new-post">New post</Link>
                                </li>
                            )}

                            <li className="hover:font-semibold">
                                <button onClick={showModalHandler}>Logout</button>
                            </li>
                            <li className="hover:font-semibold">
                                <FaUserCircle className="text-2xl" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
