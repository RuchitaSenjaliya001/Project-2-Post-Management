import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export default function Navbar({ showModalHandler }) {

    const loginInfo = localStorage.getItem("user");
    console.log(loginInfo);
    const userLoginData = JSON.parse(loginInfo);

    return (
        <>
            <nav className="w-full bg-[#201d75] text-white p-4">
                <div className="max-w-7xl text-md m-auto flex justify-between items-center">
                    <div className="text-xl">
                        <Link to="/">PROJECT 2</Link>
                    </div>
                    <div className="flex">
                        <div className="md:hidden">
                            {" "}
                            <MdMenu fontSize="30px" />
                        </div>
                        <ul className="hidden md:flex space-x-6 items-center">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {userLoginData.role === "admin" && (
                                <li>
                                    <Link to="/new-post">New post</Link>
                                </li>
                            )}

                            <li>
                                <button onClick={showModalHandler}>Logout</button>
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
