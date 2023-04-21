import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'

export default function Navbar() {
    return (
        <>
            <nav className="w-full bg-[#201d75] text-white p-3">
                <div className="max-w-7xl text-md m-auto flex justify-between items-center">
                    <div className="text-xl"><Link to="/">PROJECT 2</Link></div>
                    <div className="">
                        <ul className="flex space-x-6 items-center">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/new-post">New post</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <FaUserCircle className="text-2xl" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
