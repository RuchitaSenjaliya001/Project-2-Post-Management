import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        const reply = confirm("Are you sure you want to logout?")
        if (reply) {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
        }
    };
    const loginInfo = localStorage.getItem("user");
    const userLoginData = JSON.parse(loginInfo);

    return (
        <>
            <nav className="w-full bg-[#201d75] text-white p-4">
                <div className="max-w-7xl text-md m-auto flex justify-between items-center">
                    <div className="text-xl">
                        <Link to="/">PROJECT 2</Link>
                    </div>
                    <div className="">
                        <ul className="flex space-x-6 items-center">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {userLoginData.role === "admin" && (
                                <li>
                                    <Link to="/new-post">New post</Link>
                                </li>
                            )}

                            <li>
                                <Link to="/login">
                                    <button onClick={logoutHandler}>Logout</button>
                                </Link>
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
